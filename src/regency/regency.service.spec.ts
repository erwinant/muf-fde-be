import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Regency } from './entities/regency.entity';
import { RegencyService } from './regency.service';

describe('RegencyService', () => {
  let service: RegencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegencyService, { provide: getModelToken(Regency.name), useValue: jest.fn() }],
    }).compile();

    service = module.get<RegencyService>(RegencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
