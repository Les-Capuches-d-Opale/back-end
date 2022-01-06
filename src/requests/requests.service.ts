import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from '../requests/entities/request.entity';

@Injectable()
export class RequestsService {
  constructor(
    @InjectModel(Request.name)
    private readonly RequestModel: Model<Request>,
  ) {}

  async findAll(): Promise<Request[]> {
    return await this.RequestModel
    .find({})
    .where('status').equals('Unassigned')
    .exec();
  }
}
