import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { FormComponent } from './entities/form-component.entity';
import { FormComponentController } from './form-component.controller';
import { FormComponentService } from './form-component.service';

describe('FormComponentController', () => {
  let controller: FormComponentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormComponentController],
      providers: [FormComponentService, { provide: getModelToken(FormComponent.name), useValue: jest.fn() }],
    }).compile();

    controller = module.get<FormComponentController>(FormComponentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
