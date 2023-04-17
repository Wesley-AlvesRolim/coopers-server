import { Task } from 'src/domain/entities';
import { TaskDto } from 'src/domain/dtos';

export abstract class TasksRepository {
  findAllByAuthorId: (authorId: number) => Promise<Task[]>;
  create: (taskDto: TaskDto) => Promise<Task>;
  update: (taskId: number, taskDto: TaskDto) => Promise<Task>;
  delete: (taskId: number) => Promise<void>;
}
