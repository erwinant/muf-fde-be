import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { FormComponent } from './entities/form-component.entity';
import { FormComponentService } from './form-component.service';

describe('FormComponentService', () => {
  let service: FormComponentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormComponentService, { provide: getModelToken(FormComponent.name), useValue: jest.fn() }],
    }).compile();

    service = module.get<FormComponentService>(FormComponentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
