import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

export class FilterItemQueryDto extends PaginationQueryDto {
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ obj }) => {
    switch (obj.isAvailable) {
      case 'true' as any:
        return true;
      case 'false' as any:
        return false;
      default:
        return obj.isAvailable;
    }
  })
  isAvailable?: boolean;
}
