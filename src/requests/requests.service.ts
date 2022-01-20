import { PaginationQueryDto } from './../common/dto/pagination-query.dto';
import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
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

  async findAll(
    paginationQueryDto: PaginationQueryDto,
  ): Promise<Request[] | any> {
    const { limit = 25, offset = 0 } = paginationQueryDto;

    const requests = await this.requestModel
      .find({
        status: { $in: ['Unassigned', 'Rejected'] },
      })
      .where('status')
      .populate('requiredProfiles')
      .skip(offset)
      .limit(limit)
      .lean()
      .exec();

    const counts = await this.requestModel
      .find({
        status: { $in: ['Unassigned', 'Rejected'] },
      })
      .where('status')
      .count();

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

    return { requests, counts };
  }

  async findOne(id: string): Promise<Request> {
    const request = await this.requestModel
      .findById(id)
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
    console.log('id', id);
    const request = await this.requestModel
      .findById(id)
      .populate('requiredProfiles')
      .exec();

    await Promise.all(
      request.requiredProfiles.map(async (id, index) => {
        request.requiredProfiles[index].speciality =
          await this.specialityModel.findById(id.speciality);
      }),
    );
    const adventuriesAvailableNow = await this.adventurersService.findAll({
      isAvailableNow: true,
    });
    console.log('adventuriesAvailableNow', adventuriesAvailableNow);
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

    const requests = await this.requestModel
      .find({
        name: { $regex: name ? name : '', $options: 'i' },
        questGiver: { $regex: questGiver ? questGiver : '', $options: 'i' },
        awardedExperience: { $gte: awardedExperience ? awardedExperience : 0 },
        bounty: {
          $gte: bountyMin ? bountyMin : 0,
          $lte: bountyMax ? bountyMax : 999999999999999,
        },
        duration: {
          $gte: duration ? duration : 0,
        },
        status: { $in: ['Unassigned', 'Rejected'] },
      })
      .where({})
      .lean()
      .exec();

    return requests;
  }
}
