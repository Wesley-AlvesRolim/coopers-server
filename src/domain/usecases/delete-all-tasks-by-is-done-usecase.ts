export interface DeleteTasksInput {
  authorId: number;
  isDone: boolean;
}

export abstract class DeleteAllTasksByIsDoneUsecaseType {
  execute: (params: DeleteTasksInput) => Promise<void>;
}
