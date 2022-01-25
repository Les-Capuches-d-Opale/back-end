import { UpdateUnavailabilityDto } from './dto/updateUnavailability.dto';
import { ParseObjectIdPipe } from './../common/pipes/object-id.pipes';
import { Adventurer } from './entities/adventurer.entity';
import { CreateAdventurerDto } from './dto/createAdventurer.dto';
import { AdventurersService } from './adventurers.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UpdateExpAdventurerDto } from './dto/updateExpAdventurer.dto';
import { FilterAdventurerQueryDto } from './dto/filterAdventurerQuery.dto';
import { Speciality } from './entities/speciality.entity';
import { CreateUnavailabilityDto } from './dto/createUnavailability.dto';
import { Unavailability } from './entities/unavailability.entity';
@ApiTags('adventurers')
@ApiBearerAuth()
@Controller('adventurers')
export class AdventurersController {
  constructor(private readonly adventurerService: AdventurersService) { }

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

  @Get('/:id')
  findOne(@Param('id', ParseObjectIdPipe) id: string): Promise<Adventurer> {
    return this.adventurerService.findOne(id);
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

  @Get('/:id/unavailability')
  getUnavailability(
    @Param('id', ParseObjectIdPipe) id: string
  ): Promise<Unavailability[]> {
    return this.adventurerService.getUnavailability(id);
  }

  @Put('/:id/unavailability')
  putUnavailability(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateUnavailability: UpdateUnavailabilityDto
  ): Promise<Unavailability> {
    return this.adventurerService.putUnavailability(id, updateUnavailability);
  }

  @Post('/:id/unavailability')
  createUnavailability(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() createUnavailability: CreateUnavailabilityDto
  ): Promise<Unavailability[]> {
    return this.adventurerService.createUnavailability(id, createUnavailability);
  }
}
