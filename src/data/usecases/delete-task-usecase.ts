import { Injectable } from '@nestjs/common';
import { TasksRepository } from 'src/domain/repositories';
import { DeleteTaskInput, DeleteTaskUsecaseType } from 'src/domain/usecases';

@Injectable()
export class DeleteTaskUsecase implements DeleteTaskUsecaseType {
  constructor(private readonly taskRepository: TasksRepository) {}

  async execute({ id }: DeleteTaskInput): Promise<void> {
    await this.taskRepository.delete(+id);
  }
}
