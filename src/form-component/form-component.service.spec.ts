import { Test, TestingModule } from '@nestjs/testing';
import { FormComponentService } from './form-component.service';

describe('FormComponentService', () => {
  let service: FormComponentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormComponentService],
    }).compile();

    service = module.get<FormComponentService>(FormComponentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
