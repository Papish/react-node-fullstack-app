import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// modules
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.model';
import { CartsModule } from './carts/carts.module';
import { Cart } from './carts/carts.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database.sqlite',
      entities: [User, Cart],
      synchronize: true,
    }),
    UsersModule,
    CartsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
