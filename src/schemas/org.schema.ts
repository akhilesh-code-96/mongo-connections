import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrgDocument = HydratedDocument<Organization>;

@Schema({ timestamps: true })
export class Organization {
  @Prop()
  name: string;

  @Prop()
  orgContactNumber: string;
}

export const OrgSchema = SchemaFactory.createForClass(Organization);
