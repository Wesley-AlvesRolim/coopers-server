import { Injectable } from '@nestjs/common';
import { TasksRepository } from 'src/domain/repositories';
import {
  CreateTaskInput,
  CreateTaskOutput,
  CreateTaskUsecaseType,
} from 'src/domain/usecases';

@Injectable()
export class CreateTaskUsecase implements CreateTaskUsecaseType {
  constructor(private readonly taskRepository: TasksRepository) {}

  async execute(params: CreateTaskInput): Promise<CreateTaskOutput> {
    const createdTask = await this.taskRepository.create(params);

    return {
      id: createdTask.id,
      isDone: createdTask.isDone,
      description: createdTask.description,
    };
  }
}
