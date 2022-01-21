import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Test, TestingModule } from '@nestjs/testing';

const req = {
  user: {
    _id: 'abc123',
  },
};

describe('Item Controller', () => {
  let itemsController: ItemsController;
  let itemsService: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [
        {
          provide: ItemsService,
          useValue: {
            findAll: jest.fn(),
            buyOne: jest.fn(),
          },
        },
      ],
    }).compile();

    itemsController = module.get<ItemsController>(ItemsController);
    itemsService = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(itemsController).toBeDefined();
  });

  describe('findAll', () => {
    describe('when no using filterDTO', () => {
      it('should return an array of items', async () => {
        const items = [
          {
            _id: '5cabe64dcf0d4447fa6e0000',
            name: 'Pomme',
            price: 59,
            type: 'consumable',
            charges: 8,
            usedCharges: 8,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
          },
          {
            _id: '5cabe64dcf0d4447fa6e0001',
            name: 'Potion de Soin supérieure',
            price: 77,
            type: 'consumable',
            charges: 5,
            usedCharges: 5,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
          },
          {
            _id: '5cabe64dcf0d4447fa6e0002',
            name: 'Potion de Soin',
            price: 89,
            type: 'consumable',
            charges: 8,
            usedCharges: 8,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
          },
        ];

        jest
          .spyOn(itemsService, 'findAll')
          .mockImplementation(() => items as any);

        expect(await itemsController.findAll({})).toBe(items);
      });
    });

    describe('when using filterDTO', () => {
      it('should return an array of filtered items', async () => {
        const items = [
          {
            _id: '5cabe64dcf0d4447fa6e0000',
            name: 'Pomme',
            price: 59,
            type: 'consumable',
            charges: 8,
            usedCharges: 8,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
          },
          {
            _id: '5cabe64dcf0d4447fa6e0001',
            name: 'Potion de Soin supérieure',
            price: 77,
            type: 'consumable',
            charges: 5,
            usedCharges: 5,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
          },
        ];

        jest
          .spyOn(itemsService, 'findAll')
          .mockImplementation(() => items as any);

        expect(itemsController.findAll({ type: 'consumable' })).resolves.toBe(
          items,
        );
      });
    });
  });

  describe('buyOne', () => {
    it('should return an item', async () => {
      const item = {
        _id: '5cabe64dcf0d4447fa6e0000',
        name: 'Pomme',
        price: 59,
        type: 'consumable',
        charges: 8,
        usedCharges: 8,
        createdAt: '2022-01-14T13:27:31.388Z',
        updatedAt: '2022-01-14T13:27:31.390Z',
      };

      jest.spyOn(itemsService, 'buyOne').mockImplementation(() => item as any);

      expect(
        await itemsController.buyOne(
          { cart: [{ itemId: '5cabe64dcf0d4447fa6e0000', quantity: 3 }] },
          req,
        ),
      ).toBe(item);
    });
  });
});
