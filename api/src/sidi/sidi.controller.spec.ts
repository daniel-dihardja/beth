import { Test, TestingModule } from '@nestjs/testing';
import { SidiController } from './sidi.controller';
import { SidiService } from './sidi.service';

describe('SidiController', () => {
  let controller: SidiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SidiController],
      providers: [SidiService],
    }).compile();

    controller = module.get<SidiController>(SidiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
