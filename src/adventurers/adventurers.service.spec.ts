import { Test, TestingModule } from '@nestjs/testing';
import { AdventurersService } from './adventurers.service';

describe('AdventurersService', () => {
  let service: AdventurersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdventurersService],
    }).compile();

    service = module.get<AdventurersService>(AdventurersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
