import { Module } from '@nestjs/common';
import { OrgInfoService } from './org-info.service';
import { OrgInfoController } from './org-info.controller';

@Module({
  controllers: [OrgInfoController],
  providers: [OrgInfoService],
})
export class OrgInfoModule {}
