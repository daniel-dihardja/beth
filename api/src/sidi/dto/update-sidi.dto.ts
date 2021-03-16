import { PartialType } from '@nestjs/mapped-types';
import { CreateSidiDto } from './create-sidi.dto';

export class UpdateSidiDto extends PartialType(CreateSidiDto) {}
