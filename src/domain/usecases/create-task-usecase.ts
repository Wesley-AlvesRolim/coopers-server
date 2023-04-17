export interface CreateTaskInput {
  description: string;
  isDone: boolean;
  authorId: number;
}

export interface CreateTaskOutput {
  id: number;
  description: string;
  isDone: boolean;
}

export abstract class CreateTaskUsecaseType {
  execute: (params: CreateTaskInput) => Promise<CreateTaskOutput>;
}
