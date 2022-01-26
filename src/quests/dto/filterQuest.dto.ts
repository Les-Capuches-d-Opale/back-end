import { QuestStatus } from './../../requests/entities/request.entity';
import { IsOptional, IsString } from 'class-validator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';



export class FilterQuestDto extends PaginationQueryDto {
  @IsOptional()
  @IsString()
  type?: QuestStatus;
}