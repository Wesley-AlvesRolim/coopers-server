import { Injectable } from '@nestjs/common';
import { Task } from 'src/domain/entities';
import { TaskDto } from 'src/domain/dtos';
import { TasksRepository } from 'src/domain/repositories';
import { PrismaDatabaseService } from '../prisma-database.service';

@Injectable()
export class PrismaTaskRepository implements TasksRepository {
  constructor(private readonly prismaService: PrismaDatabaseService) {}

  async findAllByAuthorId(authorId: number): Promise<Task[]> {
    const tasks = await this.prismaService.task.findMany({
      where: { authorId },
    });
    return this.removeAuthorId(tasks);
  }

  async update(taskId: number, taskDto: TaskDto): Promise<Task> {
    const newTask = await this.prismaService.task.update({
      where: {
        id: taskId,
      },
      data: {
        description: taskDto.description,
        isDone: taskDto.isDone,
      },
    });

    delete newTask.authorId;
    return newTask;
  }

  async create(taskDto: TaskDto): Promise<Task> {
    const data = {
      description: taskDto.description,
      isDone: taskDto.isDone,
      authorId: taskDto.authorId,
    };

    const task = await this.prismaService.task.create({ data });
    return task;
  }

  async delete(taskId: number): Promise<void> {
    await this.prismaService.task.delete({
      where: {
        id: taskId,
      },
    });
  }

  async deleteAllByIsDone(authorId: number, isDone: boolean): Promise<void> {
    await this.prismaService.task.deleteMany({
      where: {
        AND: [
          {
            authorId,
          },
          {
            isDone,
          },
        ],
      },
    });
  }

  private removeAuthorId(tasks: Task[]) {
    return tasks.map((task) => {
      delete task.authorId;
      return task;
    });
  }
}
