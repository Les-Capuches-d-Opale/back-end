import { AdventurersService } from 'src/adventurers/adventurers.service';
import { RequestsService } from 'src/requests/requests.service';
import { CreateTransactionDto } from './dto/createTransaction.dto';
import { TransactionsService } from './transactions.service';
import { Transaction } from './entities/transaction.entity';
import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { Request } from 'src/requests/entities/request.entity';
import { Speciality } from 'src/adventurers/entities/speciality.entity';
import { Adventurer } from 'src/adventurers/entities/adventurer.entity';

describe('Transactions Service', () => {
  let transactionsService: TransactionsService;
  let transactionModel: Model<Transaction>;
  let requestsService: RequestsService;
  let requestModel: Model<Request>;
  let specialityModel: Model<Speciality>;
  let adventurersService: AdventurersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        RequestsService,
        TransactionsService,
        AdventurersService,
        {
          provide: getModelToken('Transaction'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Transaction),
            find: jest.fn(),
            exec: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getModelToken('Request'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Request),
            find: jest.fn(),
            exec: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getModelToken('Speciality'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Speciality),
            find: jest.fn(),
            exec: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    transactionsService = module.get<TransactionsService>(TransactionsService);
    adventurersService = module.get<AdventurersService>(AdventurersService);

    transactionModel = module.get<Model<Transaction>>(
      getModelToken(Transaction.name),
    );

    requestModel = module.get<Model<Request>>(
      getModelToken(Request.name),
    );

    specialityModel = module.get<Model<Speciality>>(
      getModelToken(Speciality.name),
    );
  });

  it('should be defined', () => {
    expect(transactionsService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of transactions', async () => {
      const transactions = [
        {
          _id: 'abc123',
          amount: 16.5,
          type: 'Purchase',
          date: new Date(),
        } as any,
        {
          _id: 'abc124',
          amount: 1.5,
          type: 'Tax',
          date: new Date(),
        } as any,
      ];

      jest.spyOn(transactionModel, 'find').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValue(transactions),
      } as any);

      expect(transactionsService.findAll()).resolves.toEqual(transactions);
    });
  });

  describe('create', () => {
    it('should create a transaction', async () => {
      const mockCreateTransaction = {
        amount: 16.5,
        type: 'Purchase',
      } as CreateTransactionDto;

      const transactions = [
        {
          _id: 'abc123',
          amount: 16.5,
          type: 'Purchase',
          date: new Date(),
        } as any,
      ] as any;

      jest.spyOn(transactionModel, 'create').mockReturnValueOnce({
        save: jest.fn().mockResolvedValue(transactions),
      } as any);

      expect(
        transactionsService.create(mockCreateTransaction),
      ).resolves.toEqual(transactions);
    });
  });
});
