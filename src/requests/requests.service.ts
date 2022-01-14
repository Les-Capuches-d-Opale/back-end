import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { Speciality } from './../adventurers/entities/speciality.entity';
import { FilterRequestQueryDto } from './dto/filterRequestQuery.dto';
import { Request } from './entities/request.entity';

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

  async FilterAll(
    filterRequestQueryDto: FilterRequestQueryDto,
  ): Promise<Request[] | any> {
    const { name, questGiver, awardedExperience, bountyMin, bountyMax, duration } = filterRequestQueryDto;

    let res = [];
    
    const requests = await this.RequestModel.find();
    
    if(name){
      res = requests.filter(e => e.name === name);
    }
    
    if(questGiver && name){
      res = res.filter(e => e.questGiver === questGiver);
    }else{
      res = requests.filter(e => e.questGiver === questGiver);
    }

    
    if(awardedExperience && questGiver && name){
      res = res.filter(e => e.awardedExperience === awardedExperience);
    }else{
      res = requests.filter(e => e.awardedExperience === awardedExperience);
    }

    if(bountyMin && bountyMax && awardedExperience && questGiver && name){
      res = res.filter(e => e.bounty <= bountyMax && e.bounty >= bountyMin);
    }else{
      res = requests.filter(e => e.bounty <= bountyMax && e.bounty >= bountyMin);
    }

    if(duration && bountyMin && bountyMax && awardedExperience && questGiver && name){
      res = res.filter(e => e.duration >= duration);
    }else{
      res = requests.filter(e => e.duration >= duration);
    }
    
    return res;

  }
}
