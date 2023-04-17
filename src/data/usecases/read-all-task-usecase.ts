import { Injectable } from '@nestjs/common';
import { TasksRepository } from 'src/domain/repositories';
import {
  ReadAllTaskInput,
  ReadAllTaskOutput,
  ReadAllTaskUsecaseType,
} from 'src/domain/usecases';

@Injectable()
export class ReadAllTaskUsecase implements ReadAllTaskUsecaseType {
  constructor(private readonly taskRepository: TasksRepository) {}

  async execute({ authorId }: ReadAllTaskInput): Promise<ReadAllTaskOutput[]> {
    const allTasks = await this.taskRepository.findAllByAuthorId(+authorId);
    return allTasks.map((task) => ({
      id: task.id,
      isDone: task.isDone,
      description: task.description,
    }));
  }
}
