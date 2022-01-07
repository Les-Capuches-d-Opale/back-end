import { Speciality } from './../adventurers/entities/speciality.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from './entities/request.entity';

@Injectable()
export class RequestsService {
  constructor(
    @InjectModel(Request.name)
    private RequestModel: Model<Request>,
  ) { }

  async findAll(): Promise<Request[]> {
    return await this.RequestModel.find({}).where('status').equals('Unassigned').exec();
  }

  async create(data: Request): Promise<Request>{
    const req = new this.RequestModel({
      ...data
    });
    return req.save();
  }
}
