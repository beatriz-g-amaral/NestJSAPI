import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TodoService } from '../services/todo.service';
import { Todo } from '../entities/todo.entity';
import { CreateTodoInput } from '../dto/create-todo.input';
import { TodoDto } from '../dto/todo.dto';

@Resolver(() => TodoDto)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [TodoDto])
  async todos(): Promise<TodoDto[]> {
    const todos = await this.todoService.findAll();
    return todos.map((todo) => todo.toDto());
  }

  @Mutation(() => TodoDto)
  async createTodo(
    @Args('createTodoInput') createTodoInput: CreateTodoInput,
  ): Promise<TodoDto> {
    const todo = await this.todoService.create(createTodoInput);
    return todo.toDto();
  }
}
