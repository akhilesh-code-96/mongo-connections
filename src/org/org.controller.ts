import {
  Body,
  Controller,
  Post,
  Get,
  ValidationPipe,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { OrgService } from './org.service';
import { CreateOrgDto } from './dto/create-org.dto';
import { DatabaseInterceptor } from 'src/common/interceptors/database.interceptor';
import { Connection } from 'mongoose';
import { TenantConnection } from 'src/common/decorators/tenant.decorator';

@Controller('org')
@UseInterceptors(DatabaseInterceptor)
export class OrgController {
  constructor(private readonly orgService: OrgService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createOrgDto: CreateOrgDto,
    @TenantConnection() connection: Connection,
  ) {
    return this.orgService.create(createOrgDto, connection);
  }

  @Get(':contact')
  async findOne(
    @Param('contact') contactNumber: string,
    @TenantConnection() connection: Connection,
  ) {
    const org = await this.orgService.findOne(contactNumber, connection);
    if (!org) {
      return { message: 'Organization not found!' };
    }
    return org;
  }
}
