import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.usersRepository.find({
      relations: ['cart'],
    });
  }

  createUser() {
    const newUser = this.usersRepository.create({
      age: 1,
      firstName: 'test',
      lastName: 'test',
    });

    return this.usersRepository.save(newUser);
  }

  deleteAllUser() {
    return this.usersRepository.clear();
  }
}
