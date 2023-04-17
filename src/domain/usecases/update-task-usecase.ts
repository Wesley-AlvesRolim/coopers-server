import { Task } from '../entities';

export interface UpdateTaskInput {
  taskId: string;
  description: string;
  isDone: boolean;
  authorId: number;
}

export type UpdateTaskOutput = Task;

export abstract class UpdateTaskUsecaseType {
  execute: (params: UpdateTaskInput) => Promise<UpdateTaskOutput>;
}
