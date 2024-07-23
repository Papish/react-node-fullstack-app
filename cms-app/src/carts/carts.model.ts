import { User } from 'src/users/users.model';
import { Entity, PrimaryGeneratedColumn, OneToOne, Column } from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  count: number;

  @OneToOne(() => User, (user) => user.cart)
  user: User;
}
