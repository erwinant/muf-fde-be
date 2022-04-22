import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FormComponentService } from './form-component.service';
import { CreateFormComponentDto } from './dto/create-form-component.dto';
import { UpdateFormComponentDto } from './dto/update-form-component.dto';

@Controller('form-component')
export class FormComponentController {
  constructor(private readonly formComponentService: FormComponentService) {}

  @Post()
  create(@Body() createFormComponentDto: CreateFormComponentDto) {
    return this.formComponentService.create(createFormComponentDto);
  }

  @Get()
  findAll(@Query('criteria') criteria?:any) {
    return this.formComponentService.findAll(criteria);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formComponentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormComponentDto: UpdateFormComponentDto) {
    return this.formComponentService.update(id, updateFormComponentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formComponentService.remove(+id);
  }
}
