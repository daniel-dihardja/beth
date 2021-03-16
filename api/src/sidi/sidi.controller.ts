import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SidiService } from './sidi.service';
import { CreateSidiDto } from './dto/create-sidi.dto';
import { UpdateSidiDto } from './dto/update-sidi.dto';

@Controller('sidi')
export class SidiController {
  constructor(private readonly sidiService: SidiService) {}

  @Post()
  create(@Body() createSidiDto: CreateSidiDto) {
    return this.sidiService.create(createSidiDto);
  }

  @Get()
  findAll() {
    return this.sidiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sidiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSidiDto: UpdateSidiDto) {
    return this.sidiService.update(+id, updateSidiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sidiService.remove(+id);
  }
}
