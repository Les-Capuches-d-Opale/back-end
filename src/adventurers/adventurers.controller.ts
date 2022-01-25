import { ParseObjectIdPipe } from './../common/pipes/object-id.pipes';
import { Adventurer } from './entities/adventurer.entity';
import { CreateAdventurerDto } from './dto/createAdventurer.dto';
import { AdventurersService } from './adventurers.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UpdateExpAdventurerDto } from './dto/updateExpAdventurer.dto';
import { FilterAdventurerQueryDto } from './dto/filterAdventurerQuery.dto';
import { Speciality } from './entities/speciality.entity';
@ApiTags('adventurers')
@ApiBearerAuth()
@Controller('adventurers')
export class AdventurersController {
  constructor(private readonly adventurerService: AdventurersService) {}

  @Get()
  findAll(
    @Query() filterAdventurerQueryDto: FilterAdventurerQueryDto,
  ): Promise<Adventurer[]> {
    return this.adventurerService.findAll(filterAdventurerQueryDto);
  }

  @Get('/specialities')
  getSpecialities(): Promise<Speciality[]> {
    return this.adventurerService.getAllSpecialities();
  }

  @Get('/repairing-items')
  getRepairingItems(): Promise<Adventurer[]> {
    return this.adventurerService.getRepairingItems();
  }

  @Get('/:id')
  findOne(@Param('id', ParseObjectIdPipe) id: string): Promise<Adventurer> {
    return this.adventurerService.findOne(id);
  }

  @Get('/schedules/:id')
  getScheduleAdventurer(
    @Param('id', ParseObjectIdPipe) id: string,
  ): Promise<Adventurer> {
    return this.adventurerService.getDaysOffAdventurer(id);
  }

  @Post()
  create(
    @Body() createAdventurerDto: CreateAdventurerDto,
  ): Promise<Adventurer> {
    return this.adventurerService.create(createAdventurerDto);
  }

  @Put('/:id')
  updateExp(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateExpAdventurerDto: UpdateExpAdventurerDto,
  ): Promise<Adventurer> {
    return this.adventurerService.updateExp(id, updateExpAdventurerDto);
  }
}
