import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RegencyService } from './regency.service';
import { CreateRegencyDto } from './dto/create-regency.dto';
import { UpdateRegencyDto } from './dto/update-regency.dto';
import { Regency, RegencyDocument } from './entities/regency.entity';

@Controller('regency')
export class RegencyController {
  constructor(private readonly regencyService: RegencyService) {}

  @Post()
  create(@Body() regency: Regency) {
    return this.regencyService.create(regency as RegencyDocument);
  }

  @Get()
  async findAll(@Query() query) {
    let { filter, skip=0, limit=50, sort=null, populate=null } = query;
    return await this.regencyService.findAll(filter, skip, limit, sort, populate);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regencyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() regency: Regency) {
    return this.regencyService.update(id, regency as RegencyDocument);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.regencyService.delete(id);
  }
}
