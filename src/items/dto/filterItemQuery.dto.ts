import { IsOptional, IsString } from 'class-validator';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { ItemTypes } from '../entities/item.entity';

export class FilterItemQueryDto extends PaginationQueryDto {
  @IsOptional()
  @IsString()
  type?: ItemTypes;
}
