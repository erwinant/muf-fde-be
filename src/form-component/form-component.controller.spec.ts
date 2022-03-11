import { Test, TestingModule } from '@nestjs/testing';
import { FormComponentController } from './form-component.controller';
import { FormComponentService } from './form-component.service';

describe('FormComponentController', () => {
  let controller: FormComponentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormComponentController],
      providers: [FormComponentService],
    }).compile();

    controller = module.get<FormComponentController>(FormComponentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
