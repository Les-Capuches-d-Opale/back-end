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

  async findOne(email: string): Promise<any> {
    return this.administratorModel.findOne({ email }).exec();
  }

  async register() {
    return await this.administratorModel.create({
      username: 'test',
      email: 'email@gmail.com',
      password: 'try',
    });
  }

  async update(
    id: string,
    updateAdministratorDto: UpdateAdministratorDto,
  ): Promise<any> {
    return await this.administratorModel
      .findOneAndUpdate(
        { _id: id },
        { $set: updateAdministratorDto },
        { new: true },
      )
      .exec();
  }
}
