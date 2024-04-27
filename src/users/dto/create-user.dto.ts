import { IsEmail } from 'class-validator';

export class CreateUserDto {
  ID_SYSTEM_CFG_CLIENTE: number;
  ID_PESSOA: number;
  LOGIN: string;
  NOME: string;
  @IsEmail({}, { message: 'Invalid email' })
  EMAIL_DE_LOGIN: string;

  SENHA: string;

  DATADOCADASTRO?: Date;
  DT_UPDATE?: Date;
}
