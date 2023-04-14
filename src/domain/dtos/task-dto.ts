import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class TaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  description: string;

  @IsBoolean()
  isDone: boolean;

  @IsNumber()
  authorId: number;
}
