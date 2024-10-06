import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './carts.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class CartsService {
  constructor(
    @Inject(UsersService) private readonly usersService: UsersService,
    @InjectRepository(Cart) private cartsRepository: Repository<Cart>,
  ) {}

  async createCart() {
    const user = await this.usersService.getUsers();
    return user;
  }
}
