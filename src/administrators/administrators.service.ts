import { UpdateAdministratorDto } from './dto/updateAdministrator.dto';
import { Administrator } from './entities/administrator.entity';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AdministratorsService {
  constructor(
    @InjectModel(Administrator.name)
    private readonly administratorModel: Model<Administrator>,
  ) {}

  async findOne(email: string): Promise<Administrator> {
    return await this.administratorModel.findOne({ email }).exec();
  }

  async update(
    id: string,
    updateAdministratorDto: UpdateAdministratorDto,
  ): Promise<Administrator> {
    return await this.administratorModel
      .findOneAndUpdate(
        { _id: id },
        { $set: updateAdministratorDto },
        { new: true },
      )
      .exec();
  }
}
