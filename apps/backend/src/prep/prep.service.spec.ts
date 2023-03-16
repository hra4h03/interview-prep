import { Test, TestingModule } from '@nestjs/testing';
import { PrepService } from './prep.service';

describe('PrepService', () => {
  let service: PrepService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrepService],
    }).compile();

    service = module.get<PrepService>(PrepService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
