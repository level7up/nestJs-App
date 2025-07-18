import { IsEmail, IsNumberString, IsString } from "class-validator";

export class CreateUserDTO {
  @IsString() name: string;
  @IsEmail() email: string;
  @IsNumberString() phone: string;
}
