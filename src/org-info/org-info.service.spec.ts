import { Test, TestingModule } from '@nestjs/testing';
import { OrgInfoService } from './org-info.service';

describe('OrgInfoService', () => {
  let service: OrgInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrgInfoService],
    }).compile();

    service = module.get<OrgInfoService>(OrgInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
