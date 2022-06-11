import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FormComponent, FormComponentDocument } from './entities/form-component.entity';
import { FormComponentService } from './form-component.service';
// import { CreateFormComponentDto } from './dto/create-form-component.dto';
// import { UpdateFormComponentDto } from './dto/update-form-component.dto';

@Controller('form-component')
export class FormComponentController {
  constructor(private readonly formComponentService: FormComponentService) {}

  @Post()
  create(@Body() formComponent: FormComponent) {
    return this.formComponentService.create(formComponent as FormComponentDocument);
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
  update(@Param('id') id: string, @Body() formComponent: FormComponent) {
    return this.formComponentService.update(id, formComponent as FormComponentDocument);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formComponentService.delete(id);
  }
}
