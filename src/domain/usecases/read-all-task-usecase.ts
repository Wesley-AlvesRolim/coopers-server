export interface ReadAllTaskInput {
  authorId: string;
}

export interface ReadAllTaskOutput {
  id: number;
  description: string;
  isDone: boolean;
}

export abstract class ReadAllTaskUsecaseType {
  execute: (params: ReadAllTaskInput) => Promise<ReadAllTaskOutput[]>;
}
