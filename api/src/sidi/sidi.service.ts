import { Injectable } from '@nestjs/common';
import { CreateSidiDto } from './dto/create-sidi.dto';
import { UpdateSidiDto } from './dto/update-sidi.dto';

@Injectable()
export class SidiService {
  create(createSidiDto: CreateSidiDto) {
    return 'This action adds a new sidi';
  }

  findAll() {
    return `This action returns all sidi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sidi`;
  }

  update(id: number, updateSidiDto: UpdateSidiDto) {
    return `This action updates a #${id} sidi`;
  }

  remove(id: number) {
    return `This action removes a #${id} sidi`;
  }
}
