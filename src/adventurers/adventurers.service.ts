import { Speciality } from './entities/speciality.entity';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AdventurersService {
  constructor(
    @InjectModel(Speciality.name)
    private readonly specialityModel: Model<Speciality>,
  ) {}

  seedSpecialities(): Array<Promise<any>> {
    const specialities = ['Fighter', 'Mage', 'Rogue', 'Cleric'];

    return specialities.map(async (speciality) => {
      await this.specialityModel
        .findOne({ name: speciality })
        .exec()
        .then(async (dbRegion) => {
          if (dbRegion) {
            return Promise.resolve(null);
          }
          return Promise.resolve(
            await this.specialityModel.create({
              name: speciality,
              description: 'description',
            }),
          );
        })
        .catch((error) => Promise.reject(error));
    });
  }
}
