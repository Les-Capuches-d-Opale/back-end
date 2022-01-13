import { Administrator } from './entities/administrator.entity';
import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { AdministratorsService } from './administrators.service';
import { Model } from 'mongoose';

const mockAdministrator = (
  _id: 'abc123',
  username = 'username',
  email = 'email@email.com',
  password = 'password-123', // not encrypted
) => ({
  username,
  email,
  password,
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
});
