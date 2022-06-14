import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Province } from './entities/province.entity';
import { ProvinceService } from './province.service';

describe('ProvinceService', () => {
  let service: ProvinceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProvinceService, { provide: getModelToken(Province.name), useValue: jest.fn() }],
    }).compile();

    service = module.get<ProvinceService>(ProvinceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
