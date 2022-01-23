import { TransactionType } from '../transactions/entities/transaction.entity';
import { Administrator } from './entities/administrator.entity';
import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { AdministratorsService } from './administrators.service';
import { Model, Types } from 'mongoose';
import { Item, ItemTypes } from 'src/items/entities/item.entity';

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
  let administratorModel: Model<Administrator>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AdministratorsService,
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
      ],
    }).compile();

    administratorService = module.get<AdministratorsService>(
      AdministratorsService,
    );

    administratorModel = module.get<Model<Administrator>>(
      getModelToken(Administrator.name),
    );
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

  // describe('getOne', () => {
  //   describe('when administrator with _id exists', () => {
  //     it('should return a administrator', async () => {
  //       const _id = 'abc123';

  //       const mockAdminTest = mockAdministrator(
  //         'abc123',
  //         'username',
  //         'valide@gmail.com',
  //         'password-123',
  //         null,
  //         null,
  //       );

        
  //       jest.spyOn(administratorModel, 'findById').mockReturnValue({
  //         populate: jest.spyOn(administratorModel, 'populate').mockReturnValue({
  //           exec: jest.fn().mockResolvedValueOnce(mockAdminTest),
  //         } as any),
  //       } as any);

  //       const administrator = await administratorService.getOne(_id);

  //       expect(administrator).toEqual(mockAdminTest);
  //     });
  //   });

  //   describe('otherwise', () => {
  //     it('should throw the "NotFoundException"', async () => {
  //       const _id = 'abc123';

  //       jest.spyOn(administratorModel, 'findById').mockReturnValue({
  //         populate: jest.spyOn(administratorModel, 'populate').mockReturnValue({
  //           exec: jest
  //             .fn()
  //             .mockRejectedValueOnce(
  //               new Error(`Administrator #${_id} not found`),
  //             ),
  //         } as any),
  //       } as any);

  //       try {
  //         await administratorService.getOne('abc123');
  //       } catch (err) {
  //         expect(err.message).toEqual(`Administrator #${_id} not found`);
  //       }
  //     });
  //   });
  // });

  // describe('update', () => {
  //   describe('when administrator with _id exists', () => {
  //     it('should return a administrator', async () => {
  //       const _id = 'abc123';

  //       const mockAdminTest = mockAdministrator(
  //         'abc123',
  //         'usernameUpdate',
  //         'valide@gmail.com',
  //         'password-123',
  //         null,
  //         null,
  //       );

  //       jest.spyOn(administratorModel, 'findOneAndUpdate').mockReturnValue({
  //         exec: jest.fn().mockResolvedValueOnce(mockAdminTest),
  //       } as any);

  //       const administrator = await administratorService.update(
  //         _id,
  //         mockAdminTest,
  //       );

  //       expect(administrator).toEqual(mockAdminTest);
  //     });
  //   });
  // });

  // describe('buy item', () => {
  //   describe('administrator have enought money to buy item', () => {
  //     it('should update administrator money and items', async () => {
  //       const mockAdminTest = mockAdministrator(
  //         '61e02e232ffc933754061ee8' as any,
  //         'username',
  //         'valide@gmail.com',
  //         'password-123',
  //         5000,
  //         [],
  //       );

  //       const mockAdminItems = mockAdministrator(
  //         '61e02e232ffc933754061ee8' as any,
  //         'username',
  //         'valide@gmail.com',
  //         'password-123',
  //         5000 - 16.5,
  //         [
  //           {
  //             durability: 10,
  //             daysInUse: 4,
  //             repairTime: 1.5,
  //             imgUrl: 'https://i.imgur.com/q1Y9QQh.png',
  //             charges: 10,
  //             usedCharges: 2,
  //             name: 'Sword',
  //             price: 16.5,
  //             transaction: {
  //               amount: 16.5,
  //               type: 'Purchase',
  //               date: new Date(),
  //             } as any,
  //             type: ItemTypes.Equipment,
  //           },
  //         ],
  //       );

  //       jest.spyOn(administratorModel, 'findById').mockReturnValueOnce({
  //         exec: jest.fn().mockResolvedValueOnce(mockAdminTest),
  //       } as any);

  //       jest.spyOn(administratorModel, 'findOneAndUpdate').mockReturnValueOnce({
  //         exec: jest.fn().mockResolvedValueOnce(mockAdminItems),
  //       } as any);

  //       const administrator = await administratorService.addItem(
  //         '61e02e232ffc933754061ee8',
  //         {} as any,
  //         {
  //           durability: 10,
  //           daysInUse: 4,
  //           repairTime: 1.5,
  //           charges: 10,
  //           imgUrl: 'https://i.imgur.com/q1Y9QQh.png',
  //           usedCharges: 2,
  //           name: 'Sword',
  //           price: 16.5,
  //           type: 'equipment',
  //           transaction: {} as any,
  //         } as any,
  //         {
  //           amount: 16.5,
  //           type: 'Purchase',
  //           date: new Date(),
  //         } as any,
  //       );

  //       expect(administrator).toEqual(mockAdminItems);
  //     });
  //   });

  //   describe('administrator didnt have enought money to buy item', () => {
  //     it('should throw an Error 400', async () => {
  //       const mockAdminTest = mockAdministrator(
  //         '61e02e232ffc933754061ee8' as any,
  //         'username',
  //         'valide@gmail.com',
  //         'password-123',
  //         0,
  //         [],
  //       );

  //       jest.spyOn(administratorModel, 'findById').mockReturnValueOnce({
  //         exec: jest.fn().mockResolvedValueOnce(mockAdminTest),
  //       } as any);

  //       try {
  //         await administratorService.addItem(
  //           '61e02e232ffc933754061ee8',
  //           {} as any,
  //           {} as any,
  //           {} as any,
  //         );
  //       } catch (err) {
  //         expect(err.message).toEqual('Not enough money');
  //       }
  //     });
  //   });
  // });
});
