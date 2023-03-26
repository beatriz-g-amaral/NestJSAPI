// src/services/todo.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';
import { CreateTodoInput } from '../dto/create-todo.input';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async create(createTodoInput: CreateTodoInput): Promise<Todo> {
    const todo = this.todoRepository.create(createTodoInput);
    return this.todoRepository.save(todo);
  }
}
