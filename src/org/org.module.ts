import { Module } from '@nestjs/common';
import { OrgService } from './org.service';
import { OrgController } from './org.controller';
import { Organization, OrgSchema } from 'src/schemas/org.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Organization.name,
        schema: OrgSchema,
      },
    ]),
  ],
  controllers: [OrgController],
  providers: [OrgService],
})
export class OrgModule {}
