import { Adventurer } from './entities/adventurer.entity';
import { CreateAventurerDto } from './dto/createAventurer.dto';
import { AdventurersService } from 'src/adventurers/adventurers.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateExpAdventurerDto } from './dto/updateExpAdventurer.dto';
@ApiTags('adventurers')
@ApiBearerAuth()
@Controller('adventurers')
export class AdventurersController {
  constructor(private readonly adventurerService: AdventurersService) {}

  @Get()
  findAll(): Promise<Adventurer[]> {
    return this.adventurerService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Adventurer> {
    return this.adventurerService.findOne(id);
  }

  @Post()
  create(@Body() createAventurerDto: CreateAventurerDto): Promise<Adventurer> {
    return this.adventurerService.create(createAventurerDto);
  }

  @Put('/:id')
  updateExp(
    @Param('id') id: string,
    @Body() updateExpAdventurerDto: UpdateExpAdventurerDto,
  ): Promise<Adventurer> {
    return this.adventurerService.updateExp(id, updateExpAdventurerDto);
  }
}
