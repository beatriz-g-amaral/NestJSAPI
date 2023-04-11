import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  async findOneByEmail(email: string): Promise<User> {
    return this.UserRepository.findOne({
      where: { email: email },
    });
  }

  async findAll(): Promise<User[]> {
    const users = await this.UserRepository.find();

    return users;
  }

  async create(newUser: User): Promise<User> {
    return this.UserRepository.save(newUser);
  }
}
