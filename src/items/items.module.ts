import { EquipmentSchema, ConsumableSchema } from './entities/item.entity';
import { Equipment, Consumable } from './entities/item.entity';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Equipment.name,
        schema: EquipmentSchema,
      },
      {
        name: Consumable.name,
        schema: ConsumableSchema,
      },
    ]),
  ],
  providers: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
