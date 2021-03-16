import { Test, TestingModule } from '@nestjs/testing';
import { SidiService } from './sidi.service';

describe('SidiService', () => {
  let service: SidiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SidiService],
    }).compile();

    service = module.get<SidiService>(SidiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
