import { Request } from '../requests/entities/request.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class RequestService {
  constructor(
    @InjectModel(Request.name)
    private readonly requestModel: Model<Request>,
  ) {}

  async findAll(
  ): Promise<Request[]> {
    return await this.requestModel
      .find()
      .exec();
  }
}
