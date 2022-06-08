import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { Province, ProvinceDocument } from './entities/province.entity';

@Controller('province')
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Post()
  create(@Body() province: Province) {
    return this.provinceService.create(province as ProvinceDocument);
  }

  @Get()
  async findAll(@Query() query) {
    let { filter, skip=0, limit=50, sort=null, populate=null } = query;
    return await this.provinceService.findAll(filter, skip, limit, sort, populate);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.provinceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() province: Province) {
    return this.provinceService.update(id, province as ProvinceDocument);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.provinceService.delete(id);
  }
}
