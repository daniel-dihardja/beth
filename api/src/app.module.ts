import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import { SidiModule } from './sidi/sidi.module';

@Module({
  imports: [SidiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
