import { TransactionsService } from './transactions.service';
import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsController } from './transactions.controller';

describe('Transaction Controller', () => {
  let transactionsController: TransactionsController;
  let transactionsService: TransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [
        {
          provide: TransactionsService,
          useValue: {
            find: jest.fn(),
            filterAll: jest.fn(),
          },
        },
      ],
    }).compile();

    transactionsController = module.get<TransactionsController>(
      TransactionsController,
    );
    transactionsService = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(transactionsController).toBeDefined();
  });

  describe('get transactions', () => {
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

      jest
        .spyOn(transactionsService, 'filterAll')
        .mockResolvedValueOnce(transactions);

      expect(
        await transactionsController.filterAll({
          transactionType: 'Purchase',
        } as any),
      ).toEqual(transactions);
    });
  });
});
