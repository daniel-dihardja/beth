import { Module } from '@nestjs/common';
import { SidiService } from './sidi.service';
import { SidiController } from './sidi.controller';

@Module({
  controllers: [SidiController],
  providers: [SidiService]
})
export class SidiModule {}
