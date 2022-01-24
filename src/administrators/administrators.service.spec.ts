import { RequestsService } from './../requests/requests.service';
import { Quest } from './../quests/entities/quest.entity';
import { Transaction } from './../transactions/entities/transaction.entity';
import { QuestsService } from './../quests/quests.service';
import { Speciality } from './../adventurers/entities/speciality.entity';
import { Adventurer } from 'src/adventurers/entities/adventurer.entity';
import { TransactionsService } from './../transactions/transactions.service';
import { AdventurersService } from 'src/adventurers/adventurers.service';
import { ItemsService } from './../items/items.service';
import { TransactionType } from '../transactions/entities/transaction.entity';
import { Administrator } from './entities/administrator.entity';
import {
  getConnectionToken,
  getModelToken,
  MongooseModule,
} from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { AdministratorsService } from './administrators.service';
import { Connection, Model, Types } from 'mongoose';
import { Item, ItemTypes } from 'src/items/entities/item.entity';
import { ConfigModule } from '@nestjs/config';
import { Request } from 'src/requests/entities/request.entity';

const mockAdministrator = (
  _id: 'abc123',
  username = 'username',
  email = 'email@email.com',
  password = 'password-123', // not encrypted
  wallet = 625130,
  items: Item[] = [],
) => ({
  _id,
  username,
  email,
  password,
  wallet,
  items,
});

describe('AdministratorsService', () => {
  let administratorService: AdministratorsService;
  let itemsService: ItemsService;
  let adventurersService: AdventurersService;
  let transactionsService: TransactionsService;
  let questsService: QuestsService;
  let requestsService: RequestsService;
  let connection: Connection;
  let administratorModel: Model<Administrator>;
  let itemModel: Model<Item>;
  let adventurerModel: Model<Adventurer>;
  let specialityModel: Model<Speciality>;
  let transactionModel: Model<Transaction>;
  let questModel: Model<Quest>;
  let requestModel: Model<Request>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({}),
        MongooseModule.forRoot(process.env.DATABASE_URI),
      ],
      providers: [
        AdministratorsService,
        ItemsService,
        AdventurersService,
        TransactionsService,
        QuestsService,
        RequestsService,
        {
          provide: getModelToken('Administrator'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Administrator),
            find: jest.fn(),
            findOne: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
            populate: jest.fn(),
            findOneAndUpdate: jest.fn(),
            exec: jest.fn(),
          },
        },
        {
          provide: getModelToken('Item'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Item),
          },
        },
        {
          provide: getModelToken('Adventurer'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Adventurer),
          },
        },
        {
          provide: getModelToken('Speciality'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Speciality),
          },
        },
        {
          provide: getModelToken('Transaction'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Transaction),
          },
        },
        {
          provide: getModelToken('Quest'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Quest),
          },
        },
        {
          provide: getModelToken('Request'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Request),
          },
        },
      ],
    }).compile();

    administratorService = module.get<AdministratorsService>(
      AdministratorsService,
    );

    itemsService = module.get<ItemsService>(ItemsService);

    adventurersService = module.get<AdventurersService>(AdventurersService);

    transactionsService = module.get<TransactionsService>(TransactionsService);

    connection = await module.get(getConnectionToken());

    administratorModel = module.get<Model<Administrator>>(
      getModelToken(Administrator.name),
    );
  });

  afterEach(async () => {
    await connection.close(true);
  });

  it('should be defined', () => {
    expect(administratorService).toBeDefined();
  });

  describe('login', () => {
    describe('when administrator with email exists', () => {
      it('should return a administrator', async () => {
        const mockAdminTest = mockAdministrator(
          'abc123',
          'username',
          'valide@gmail.com',
          'password-123',
          null,
          null,
        );

        jest.spyOn(administratorModel, 'findOne').mockReturnValueOnce({
          exec: jest.fn().mockResolvedValueOnce(mockAdminTest),
        } as any);

        const administrator = await administratorService.findOne(
          'valide@gmail.com',
        );

        expect(administrator).toEqual(mockAdminTest);
      });
    });

    describe('otherwise', () => {
      it('should throw the "NotFoundException"', async () => {
        jest.spyOn(administratorModel, 'findOne').mockReturnValueOnce({
          exec: jest.fn().mockRejectedValueOnce(new Error('Not found')),
        } as any);

        try {
          await administratorService.findOne('valide@gmail.com');
        } catch (err) {
          expect(err.message).toEqual('Not found');
        }
      });
    });
  });

  describe('getOne', () => {
    describe('when administrator with _id exists', () => {
      it('should return a administrator', async () => {
        const _id = 'abc123';

        const mockAdminTest = mockAdministrator(
          'abc123',
          'username',
          'valide@gmail.com',
          'password-123',
          null,
          null,
        );

        jest.spyOn(administratorModel, 'findById').mockReturnValue({
          populate: jest.spyOn(administratorModel, 'populate').mockReturnValue({
            exec: jest.fn().mockResolvedValueOnce(mockAdminTest),
          } as any),
        } as any);

        const administrator = await administratorService.getOne(_id);

        expect(administrator).toEqual(mockAdminTest);
      });
    });

    describe('otherwise', () => {
      it('should throw the "NotFoundException"', async () => {
        const _id = 'abc123';

        jest.spyOn(administratorModel, 'findById').mockReturnValue({
          populate: jest.spyOn(administratorModel, 'populate').mockReturnValue({
            exec: jest
              .fn()
              .mockRejectedValueOnce(
                new Error(`Administrator #${_id} not found`),
              ),
          } as any),
        } as any);

        try {
          await administratorService.getOne('abc123');
        } catch (err) {
          expect(err.message).toEqual(`Administrator #${_id} not found`);
        }
      });
    });
  });

  describe('update', () => {
    describe('when administrator with _id exists', () => {
      it('should return a administrator', async () => {
        const _id = 'abc123';

        const mockAdminTest = mockAdministrator(
          'abc123',
          'usernameUpdate',
          'valide@gmail.com',
          'password-123',
          null,
          null,
        );

        jest.spyOn(administratorModel, 'findOneAndUpdate').mockReturnValue({
          exec: jest.fn().mockResolvedValueOnce(mockAdminTest),
        } as any);

        const administrator = await administratorService.update(
          _id,
          mockAdminTest,
        );

        expect(administrator).toEqual(mockAdminTest);
      });
    });
  });

  describe('buy item', () => {
    describe('administrator have enought money to buy item', () => {
      it('should update administrator money and items', async () => {
        const mockAdminTest = mockAdministrator(
          '61e02e232ffc933754061ee8' as any,
          'username',
          'valide@gmail.com',
          'password-123',
          5000,
          [],
        );

        const mockAdminItems = mockAdministrator(
          '61e02e232ffc933754061ee8' as any,
          'username',
          'valide@gmail.com',
          'password-123',
          5000 - 16.5,
          [
            {
              durability: 10,
              daysInUse: 4,
              repairTime: 1.5,
              imgUrl: 'https://i.imgur.com/q1Y9QQh.png',
              charges: 10,
              usedCharges: 2,
              name: 'Sword',
              price: 16.5,
              transaction: {
                amount: 16.5,
                type: 'Purchase',
                date: new Date(),
              } as any,
              type: ItemTypes.Equipment,
            },
          ],
        );

        const items = [{ id: '1', quantity: 1, price: 16.5 }];

        jest.spyOn(administratorModel, 'findById').mockReturnValueOnce({
          exec: jest.fn().mockResolvedValueOnce(mockAdminTest),
        } as any);

        jest.spyOn(administratorModel, 'findOneAndUpdate').mockReturnValueOnce({
          session: jest.fn().mockReturnValueOnce({
            exec: jest.fn().mockResolvedValueOnce(mockAdminItems),
          } as any),
        } as any);

        const administrator = await administratorService.addItem(
          '61e02e232ffc933754061ee8',
          items,
          {} as any,
          {} as any,
        );

        expect(administrator).toEqual(mockAdminItems);
      });
    });

    describe('administrator didnt have enought money to buy item', () => {
      it('should throw an Error 400', async () => {
        const mockAdminTest = mockAdministrator(
          '61e02e232ffc933754061ee8' as any,
          'username',
          'valide@gmail.com',
          'password-123',
          0,
          [],
        );

        const items = [{ id: '1', quantity: 1, price: 16.5 }];

        jest.spyOn(administratorModel, 'findById').mockReturnValueOnce({
          exec: jest.fn().mockResolvedValueOnce(mockAdminTest),
        } as any);

        try {
          await administratorService.addItem(
            '61e02e232ffc933754061ee8',
            items,
            {} as any,
            {} as any,
          );
        } catch (err) {
          expect(err.message).toEqual('Not enough money');
        }
      });
    });
  });
});
