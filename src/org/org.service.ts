import { Injectable } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { CreateOrgDto } from './dto/create-org.dto';
import { Organization } from 'src/schemas/org.schema';

@Injectable()
export class OrgService {
  // Remove @InjectModel since we’ll be using tenant-specific connections

  async create(
    createOrgDto: CreateOrgDto,
    connection: Connection, // Tenant-specific connection
  ): Promise<Organization> {
    // Define the tenant-specific model for Organization
    const orgModel = connection.model<Organization>('Organization');

    // Use tenant-specific model to create an entry
    const createdOrg = new orgModel(createOrgDto);
    return createdOrg.save();
  }

  async findOne(
    contactNumber: string,
    connection: Connection,
  ): Promise<Organization | null> {
    // Define the tenant-specific model for Organization
    const orgModel = connection.model<Organization>('Organization');

    // Use tenant-specific model to find the organization by contact number
    const org = await orgModel
      .findOne({ orgContactNumber: contactNumber })
      .exec();

    return org;
  }
}
