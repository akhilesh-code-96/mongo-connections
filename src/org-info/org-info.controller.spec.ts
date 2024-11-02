import { Test, TestingModule } from '@nestjs/testing';
import { OrgInfoController } from './org-info.controller';
import { OrgInfoService } from './org-info.service';

describe('OrgInfoController', () => {
  let controller: OrgInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrgInfoController],
      providers: [OrgInfoService],
    }).compile();

    controller = module.get<OrgInfoController>(OrgInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
