import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { Speciality } from './../adventurers/entities/speciality.entity';
import { Request, QuestStatus } from './entities/request.entity';

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
    status: QuestStatus,
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
}
