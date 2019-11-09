import { IsNotEmpty, IsNumber } from 'class-validator';

export class CarDto {

  @IsNumber()
  readonly id: number;

  @IsNotEmpty()
  readonly brand: string;

  @IsNotEmpty()
  readonly model: string;

  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  readonly year: number;

  @IsNotEmpty()
  readonly fuel: string;

  @IsNotEmpty()
  readonly doors: number;
}