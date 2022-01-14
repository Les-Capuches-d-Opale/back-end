import { TransactionsService } from './../transactions/transactions.service';
import { AdministratorsService } from 'src/administrators/administrators.service';
import {
  getConnectionToken,
  getModelToken,
  MongooseModule,
} from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Connection, Model } from 'mongoose';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';
import { ConfigModule } from '@nestjs/config';
import { Administrator } from 'src/administrators/entities/administrator.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
describe('Items Service', () => {
  let itemsService: ItemsService;
  let itemModel: Model<Item>;
  let transactionModel: Model<Transaction>;
  let administratorModel: Model<Administrator>;
  let connection: Connection;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({}),
        MongooseModule.forRoot(process.env.DATABASE_URI),
      ],
      providers: [
        ItemsService,
        {
          provide: getModelToken('Item'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Item),
            exec: jest.fn(),
            find: jest.fn(),
            findById: jest.fn(),
            where: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getModelToken('Administrator'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Administrator),
            findById: jest.fn(),
            findOneAndUpdate: jest.fn(),
            exec: jest.fn(),
          },
        },
        {
          provide: getModelToken('Transaction'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Transaction),
            exec: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          },
        },
        AdministratorsService,
        TransactionsService,
      ],
    }).compile();

    itemsService = module.get<ItemsService>(ItemsService);
    itemModel = module.get<Model<Item>>(getModelToken(Item.name));
    transactionModel = module.get<Model<Transaction>>(
      getModelToken(Transaction.name),
    );
    administratorModel = module.get<Model<Administrator>>(
      getModelToken(Administrator.name),
    );

    connection = await module.get(getConnectionToken());
  });

  afterEach(async () => {
    await connection.close(true);
  });

  it('should be defined', () => {
    expect(itemsService).toBeDefined();
  });

  describe('findAll', () => {
    describe('with no filterDTO', () => {
      it('should return all items', async () => {
        const items = [
          {
            _id: '5e9a9b7e9f9e8e0a4f4c4a4a',
            name: 'item1',
            description: 'item1 description',
            price: 10,
            quantity: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            _id: '5e9a9b7e9f9e8e0a4f4c4a4b',
            name: 'item2',
            description: 'item2 description',
            price: 20,
            quantity: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ];

        jest.spyOn(itemModel, 'find').mockReturnValue({
          where: jest.spyOn(itemModel, 'where').mockReturnValue({
            skip: jest.fn().mockReturnValue({
              limit: jest.fn().mockReturnValue({
                exec: jest.fn().mockResolvedValue(items),
              }),
            } as any),
          } as any),
        } as any);

        const result = await itemsService.findAll({} as any);

        expect(result).toEqual(items);
      });
    });

    describe('with filterDTO', () => {
      it('should return all matching filter ', async () => {
        const items = [
          {
            _id: '5e9a9b7e9f9e8e0a4f4c4a4a',
            name: 'item1',
            description: 'item1 description',
            price: 10,
            type: 'equipment',
            quantity: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ];

        jest.spyOn(itemModel, 'find').mockReturnValue({
          where: jest.spyOn(itemModel, 'where').mockReturnValue({
            skip: jest.fn().mockReturnValue({
              limit: jest.fn().mockReturnValue({
                exec: jest.fn().mockResolvedValue(items),
              }),
            } as any),
          } as any),
        } as any);

        const result = await itemsService.findAll({ type: 'equipment' } as any);

        expect(result).toEqual(items);
      });
    });
  });

  describe('buyOne', () => {
    describe('everything goes well', () => {
      it('should save item bought in adminitrator and transaction', async () => {
        const item = {
          _id: '5e9a9b7e9f9e8e0a4f4c4a4a',
          name: 'item1',
          description: 'item1 description',
          price: 10,
          quantity: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          save: jest.fn(),
        };

        const transaction = {
          amount: item.price,
          type: 'Purchase',
          date: new Date(),
        };

        const administrator = {
          _id: '61e02e232ffc933754061ee8',
          username: 'admin',
          password: 'admin',
        };

        const administratorWithItem = {
          ...administrator,
          items: [item],
        };

        jest.spyOn(connection, 'startSession').mockReturnValue({
          startTransaction: jest.fn().mockResolvedValue({}),
          commitTransaction: jest.fn().mockResolvedValue({}),
          abortTransaction: jest.fn().mockResolvedValue({}),
          endSession: jest.fn().mockResolvedValue({}),
        } as any);

        jest.spyOn(itemModel, 'findById').mockReturnValueOnce({
          session: jest.fn().mockReturnValueOnce({
            exec: jest.fn().mockResolvedValue(item),
          }),
        } as any);

        jest.spyOn(transactionModel, 'create').mockReturnValueOnce({
          save: jest.fn().mockResolvedValue(transaction),
        } as any);

        jest.spyOn(administratorModel, 'findById').mockReturnValueOnce({
          exec: jest.fn().mockResolvedValue(administrator),
          findOneAndUpdate: jest
            .spyOn(administratorModel, 'findOneAndUpdate')
            .mockReturnValueOnce({
              exec: jest.fn().mockResolvedValue(administratorWithItem),
            } as any),
        } as any);

        expect(
          itemsService.buyOne(item._id, '61e02e232ffc933754061ee8'),
        ).resolves.toEqual(item);
      });
    });

    describe('administrator have not enought money', () => {
      it('should throw an Error 400', async () => {
        const item = {
          _id: '5e9a9b7e9f9e8e0a4f4c4a4a',
          name: 'item1',
          description: 'item1 description',
          price: 10,
          quantity: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          save: jest.fn(),
        };

        const transaction = {
          amount: item.price,
          type: 'Purchase',
          date: new Date(),
        };

        const administrator = {
          _id: '61e02e232ffc933754061ee8',
          username: 'admin',
          password: 'admin',
          wallet: 0,
        };

        jest.spyOn(connection, 'startSession').mockReturnValue({
          startTransaction: jest.fn().mockResolvedValue({}),
          commitTransaction: jest.fn().mockResolvedValue({}),
          abortTransaction: jest.fn().mockResolvedValue({}),
          endSession: jest.fn().mockResolvedValue({}),
        } as any);

        jest.spyOn(itemModel, 'findById').mockReturnValueOnce({
          session: jest.fn().mockReturnValueOnce({
            exec: jest.fn().mockResolvedValue(item),
          }),
        } as any);

        jest.spyOn(transactionModel, 'create').mockReturnValueOnce({
          save: jest.fn().mockResolvedValue(transaction),
        } as any);

        jest.spyOn(administratorModel, 'findById').mockReturnValueOnce({
          exec: jest.fn().mockResolvedValue(administrator),
        } as any);

        try {
          await itemsService.buyOne(item._id, '61e02e232ffc933754061ee8');
        } catch (err) {
          expect(err.message).toEqual('Not enough money');
        }
      });
    });

    describe('item Id doesnt exist', () => {
      it('should throw an Error 400', async () => {
        const item = {
          _id: '5e9a9b7e9f9e8e0a4f4c4a4a',
          name: 'item1',
          description: 'item1 description',
          price: 10,
          quantity: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          save: jest.fn(),
        };

        jest.spyOn(connection, 'startSession').mockReturnValue({
          startTransaction: jest.fn().mockResolvedValue({}),
          commitTransaction: jest.fn().mockResolvedValue({}),
          abortTransaction: jest.fn().mockResolvedValue({}),
          endSession: jest.fn().mockResolvedValue({}),
        } as any);

        jest.spyOn(itemModel, 'findById').mockReturnValueOnce({
          session: jest.fn().mockReturnValueOnce({
            exec: jest.fn().mockResolvedValueOnce(null),
          }),
        } as any);

        try {
          await itemsService.buyOne(item._id, '61e02e232ffc933754061ee8');
        } catch (err) {
          expect(err.message).toEqual('Item not found');
        }
      });
    });
  });
});
