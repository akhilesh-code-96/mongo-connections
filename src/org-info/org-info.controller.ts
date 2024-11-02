import { Controller } from '@nestjs/common';
import { OrgInfoService } from './org-info.service';

@Controller('org-info')
export class OrgInfoController {
  constructor(private readonly orgInfoService: OrgInfoService) {}
}
