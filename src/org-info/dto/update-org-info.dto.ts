import { PartialType } from '@nestjs/mapped-types';
import { CreateOrgInfoDto } from './create-org-info.dto';

export class UpdateOrgDto extends PartialType(CreateOrgInfoDto) {}
