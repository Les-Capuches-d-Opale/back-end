import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { Speciality } from './../adventurers/entities/speciality.entity';
import { CreateRequestDto } from './dto/createRequest.dto';
import { FilterRequestQueryDto } from './dto/filterRequestQuery.dto';
import { SetStatusRequestDto } from './dto/setStatusRequest.dto';
import { QuestStatus, Request } from './entities/request.entity';
import { Adventurer } from 'src/adventurers/entities/adventurer.entity';
import { AdventurersService } from 'src/adventurers/adventurers.service';
const mongoose = require('mongoose');

@Injectable()
export class RequestsService {
  constructor(
    @InjectModel(Request.name)
    private readonly requestModel: Model<Request>,
    @InjectModel(Speciality.name)
    private readonly specialityModel: Model<Speciality>,
    @Inject(forwardRef(() => AdventurersService))
    private readonly adventurersService: AdventurersService,
  ) {}

  async changeStatusByID(
    id: string,
    status: QuestStatus,
  ): Promise<UpdateWriteOpResult> {
    return this.requestModel.updateOne({ _id: id }, { status: status });
  }

  async setStatus(
    id: string,
    setStatusRequest: SetStatusRequestDto,
  ): Promise<UpdateWriteOpResult> {
    const { status } = setStatusRequest;
    return await this.changeStatusByID(id, status);
  }

  async findAll(): Promise<Request[] | any> {
    const requests = await this.requestModel.find({})
      .where('status')
      .populate('requiredProfiles')
      .equals('Unassigned')
      .equals('Rejected')
      .lean()
      .exec();

    await Promise.all(
      requests.map(async (request) => {
        const requiredProfilesIds = request.requiredProfiles.map(
          (profile) => profile.speciality,
        );

        await Promise.all(
          requiredProfilesIds.map(async (id, index) => {
            request.requiredProfiles[index].speciality =
              await this.specialityModel.findById(id);
          }),
        );
      }),
    );

    return requests;
  }

  async findOne(id: string): Promise<Request> {
    const request = await this.requestModel.findById(id)
      .populate('requiredProfiles')
      .exec();

    await Promise.all(
      request.requiredProfiles.map(async (id, index) => {
        request.requiredProfiles[index].speciality =
          await this.specialityModel.findById(id.speciality);
      }),
    );

    return request;
  }

  async findAvailableAdventurers(id: string): Promise<Request> {
    const request = await this.requestModel.findById(id)
      .populate('requiredProfiles')
      .exec();

    await Promise.all(
      request.requiredProfiles.map(async (id, index) => {
        request.requiredProfiles[index].speciality =
          await this.specialityModel.findById(id.speciality);
      }),
    );
    const adventuriesAvailableNow = await this.adventurersService.findAll({isAvailableNow: true});

    return adventuriesAvailableNow;
  }


  async create(createRequestDto: CreateRequestDto): Promise<Request> {
    const newRequiredProfile = [];

    const {
      name,
      description,
      pictureUrl,
      questGiver,
      bounty,
      duration,
      requiredProfiles,
      awardedExperience,
      status,
      dateDebut,
    } = createRequestDto;

    requiredProfiles.map((profil) => {
      if (!profil.speciality) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'speciality is required',
          },
          HttpStatus.FORBIDDEN,
        );
      } else if (!profil.experience) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'experience is required',
          },
          HttpStatus.FORBIDDEN,
        );
      }

      newRequiredProfile.push({
        speciality: new mongoose.Types.ObjectId(profil.speciality),
        experience: profil.experience,
      });
    });

    const req = new this.requestModel({
      name: name,
      description: description,
      pictureUrl: pictureUrl,
      questGiver: questGiver,
      bounty: bounty,
      duration: duration,
      requiredProfiles: newRequiredProfile,
      awardedExperience: awardedExperience,
      status: status,
      dateDebut: dateDebut,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return req.save({ timestamps: true });
  }

  async FilterAll(
    filterRequestQueryDto: FilterRequestQueryDto,
  ): Promise<Request[] | any> {
    const {
      name,
      questGiver,
      awardedExperience,
      bountyMin,
      bountyMax,
      duration,
    } = filterRequestQueryDto;

    let res = [];

    const requests = await this.requestModel.find();

    if (name) {
      res = requests.filter((e) => e.name === name);
    }

    if (questGiver && res.length > 0) {
      res = res.filter((e) => e.questGiver === questGiver);
    } else if (questGiver) {
      res = requests.filter((e) => e.questGiver === questGiver);
    }

    if (awardedExperience && res.length > 0) {
      res = res.filter((e) => e.awardedExperience === awardedExperience);
    } else if (awardedExperience) {
      res = requests.filter((e) => e.awardedExperience === awardedExperience);
    }

    if (bountyMin && bountyMax && res.length > 0) {
      res = res.filter((e) => e.bounty <= bountyMax && e.bounty >= bountyMin);
    } else if (bountyMin && bountyMax) {
      res = requests.filter(
        (e) => e.bounty <= bountyMax && e.bounty >= bountyMin,
      );
    }

    if (duration && res.length > 0) {
      res = res.filter((e) => e.duration >= duration);
    } else if (duration) {
      res = requests.filter((e) => e.duration >= duration);
    }

    if (res.length > 0) {
      return res;
    } else {
      return this.findAll();
    }
  }
}
