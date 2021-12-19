import { AdministratorsService } from 'src/administrators/administrators.service';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { Item } from './entities/item.entity';
import { FilterItemQueryDto } from './dto/filterItemQuery.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name)
    private readonly itemModel: Model<Item>,
    @InjectConnection() private readonly connection: Connection,
    private readonly administratorService: AdministratorsService,
  ) {}

  async findAll(filterItemQueryDto: FilterItemQueryDto): Promise<Item[]> {
    const { limit, offset, type } = filterItemQueryDto;
    return await this.itemModel
      .find({ isAvailable: true })
      .where(type ? { type } : {})
      .skip(offset)
      .limit(limit)
      .exec();
  }

  async buyOne(id: string, adminId: string): Promise<Item> {
    const session = await this.connection.startSession();
    session.startTransaction();

    try {
      const item = await this.itemModel
        .findOneAndUpdate(
          { _id: id, isAvailable: true },
          {
            $set: { isAvailable: false },
          },
          { new: true, session: session },
        )
        .exec();

      if (!item)
        throw new NotFoundException('Item not found or already bought');

      await this.administratorService.addItem(adminId, item);

      await item.save({ session });
      await session.commitTransaction();

      return item;
    } catch (err) {
      await session.abortTransaction();
      throw err;
    } finally {
      session.endSession();
    }
  }
}
