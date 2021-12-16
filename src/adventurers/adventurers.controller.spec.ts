import { Test, TestingModule } from '@nestjs/testing';
import { AdventurersController } from './adventurers.controller';

describe('AdventurersController', () => {
  let controller: AdventurersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdventurersController],
    }).compile();

    controller = module.get<AdventurersController>(AdventurersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
