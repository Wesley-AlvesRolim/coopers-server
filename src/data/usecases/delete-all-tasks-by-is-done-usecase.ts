import { BadRequestException, Injectable } from '@nestjs/common';
import { TasksRepository } from 'src/domain/repositories';
import {
  DeleteAllTasksByIsDoneUsecaseType,
  DeleteTasksInput,
} from 'src/domain/usecases';

@Injectable()
export class DeleteAllTasksByIsDoneUsecase
  implements DeleteAllTasksByIsDoneUsecaseType
{
  constructor(private readonly taskRepository: TasksRepository) {}

  async execute({ authorId, isDone }: DeleteTasksInput): Promise<void> {
    if (typeof isDone !== 'boolean' || typeof authorId !== 'number') {
      throw new BadRequestException('Invalid request data!');
    }
    await this.taskRepository.deleteAllByIsDone(authorId, isDone);
  }
}
