export interface DeleteTaskInput {
  id: string;
}

export abstract class DeleteTaskUsecaseType {
  execute: (params: DeleteTaskInput) => Promise<void>;
}
