import { Model, UpdateWriteOpResult } from 'mongoose';
import { Speciality } from './../adventurers/entities/speciality.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from './entities/request.entity';
import { CreateRequestDto } from './dto/createRequest.dto';
const mongoose = require('mongoose');

@Injectable()
export class RequestsService {
  constructor(
    @InjectModel(Request.name)
    private readonly RequestModel: Model<Request>,
    @InjectModel(Speciality.name)
    private readonly SpecialityModel: Model<Speciality>,
  ) {}

  async setStatusByID(
    id: string,
    status: string,
  ): Promise<UpdateWriteOpResult> {
    return this.RequestModel.updateOne({ _id: id }, { status: status });
  }

  async findAll(): Promise<Request[] | any> {
    const requests = await this.RequestModel.find({})
      .where('status')
      .populate('requiredProfiles')
      .equals('Unassigned')
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
              await this.SpecialityModel.findById(id);
          }),
        );
      }),
    );

    return requests;
  }

  async create(createRequestDto: CreateRequestDto): Promise<Request>{

    let newRequiredProfile = [];

  const { name, description, pictureUrl, questGiver, bounty, duration, requiredProfiles, 
    awardedExperience, status, dateDebut } = createRequestDto

 requiredProfiles.map((profil) => {

  if(!profil.speciality){
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'speciality is required',
    }, HttpStatus.FORBIDDEN);
  }else if(!profil.experience){
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'experience is required',
    }, HttpStatus.FORBIDDEN);
  }

   newRequiredProfile.push({
     speciality: new mongoose.Types.ObjectId(profil.speciality),
     experience: profil.experience
   })
   
 })
 
  const req = new this.RequestModel({
    name: name,
    description: description,
    pictureUrl: pictureUrl,
    questGiver: questGiver,
    bounty: bounty,
    duration: duration,
    requiredProfiles:  newRequiredProfile,
    awardedExperience: awardedExperience,
    status: status,
    dateDebut: dateDebut,  
    createdAt: new Date(),
    updatedAt: new Date()
  })
  
  return req.save({timestamps: true})

  }
}
