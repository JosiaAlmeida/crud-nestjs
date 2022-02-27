import { IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  readonly nome: string;
  @IsString()
  readonly descricao: string;
  @IsString()
  readonly tags: string[];
}
