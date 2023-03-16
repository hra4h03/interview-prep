import { Test, TestingModule } from '@nestjs/testing';
import { PrepController } from './prep.controller';

describe('PrepController', () => {
  let controller: PrepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrepController],
    }).compile();

    controller = module.get<PrepController>(PrepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
