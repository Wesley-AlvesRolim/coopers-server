import { Injectable } from '@nestjs/common';
import { TasksRepository } from 'src/domain/repositories';
import {
  UpdateTaskInput,
  UpdateTaskOutput,
  UpdateTaskUsecaseType,
} from 'src/domain/usecases';

@Injectable()
export class UpdateTaskUsecase implements UpdateTaskUsecaseType {
  constructor(private readonly taskRepository: TasksRepository) {}

  async execute({
    taskId,
    ...task
  }: UpdateTaskInput): Promise<UpdateTaskOutput> {
    const updatedTask = await this.taskRepository.update(+taskId, task);

    return {
      ...updatedTask,
    };
  }
}
