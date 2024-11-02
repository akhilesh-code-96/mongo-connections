import { IsString, IsPhoneNumber } from 'class-validator';

export class CreateOrgDto {
  @IsString()
  name: string;

  @IsPhoneNumber('IN')
  orgContactNumber: string;
}
