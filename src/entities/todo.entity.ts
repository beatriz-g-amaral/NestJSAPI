import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TodoDto } from '../dto/todo.dto';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  completed: boolean;

  toDto(): TodoDto {
    const { id, title, description, completed } = this;
    return { id, title, description, completed };
  }
}
