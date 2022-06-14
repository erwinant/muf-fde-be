import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Regency } from './entities/regency.entity';
import { RegencyController } from './regency.controller';
import { RegencyService } from './regency.service';

describe('RegencyController', () => {
  let controller: RegencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegencyController],
      providers: [RegencyService, { provide: getModelToken(Regency.name), useValue: jest.fn() }],
    }).compile();

    controller = module.get<RegencyController>(RegencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
