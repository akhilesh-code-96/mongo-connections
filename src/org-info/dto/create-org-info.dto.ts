import { IsPhoneNumber, IsString, IsArray } from 'class-validator';

export class CreateOrgInfoDto {
  @IsPhoneNumber()
  orgContactNumber: string;

  @IsString()
  name: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  size: string;

  @IsArray()
  businessUnits: string[];

  @IsArray()
  departments: string[];
}
