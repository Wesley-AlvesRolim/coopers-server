import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDto } from 'src/domain/dtos';
import { Task } from 'src/domain/entities';
import {
  CreateTaskOutput,
  CreateTaskUsecaseType,
  DeleteTaskUsecaseType,
  ReadAllTaskOutput,
  ReadAllTaskUsecaseType,
  UpdateTaskUsecaseType,
} from 'src/domain/usecases';

@Controller('/task')
export class UserTaskController {
  constructor(
    private readonly readAllTasksUsecase: ReadAllTaskUsecaseType,
    private readonly createTaskUsecase: CreateTaskUsecaseType,
    private readonly updateTaskUsecase: UpdateTaskUsecaseType,
    private readonly deleteTaskUsecase: DeleteTaskUsecaseType,
  ) {}

  @Get(':id')
  async getTasks(
    @Param('id') authorId: string,
  ): Promise<{ tasks: ReadAllTaskOutput[] }> {
    const tasks = await this.readAllTasksUsecase.execute({ authorId });
    return { tasks };
  }

  @Post()
  async createTask(
    @Body() taskDto: TaskDto,
  ): Promise<{ task: CreateTaskOutput }> {
    const task = await this.createTaskUsecase.execute(taskDto);
    return { task };
  }

  @Put(':id')
  async updateTask(
    @Param('id') taskId: string,
    @Body() taskDto: TaskDto,
  ): Promise<{ task: Task }> {
    const newTask = await this.updateTaskUsecase.execute({
      taskId,
      ...taskDto,
    });
    return { task: newTask };
  }

  @Delete(':id')
  async deleteTask(@Param('id') taskId: string): Promise<void> {
    await this.deleteTaskUsecase.execute({ id: taskId });
  }
}
