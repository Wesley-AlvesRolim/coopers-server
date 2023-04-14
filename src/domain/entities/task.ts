export interface Task {
  id: number;
  description: string;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
}
