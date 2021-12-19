import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { AdventurersService } from './adventurers.service';
import { Adventurer } from './entities/adventurer.entity';

describe('AdventurersService', () => {
  let service: AdventurersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdventurersService,
        {
          provide: getModelToken('Adventurer'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Adventurer),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AdventurersService>(AdventurersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
