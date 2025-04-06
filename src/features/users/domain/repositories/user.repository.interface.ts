import { User } from '../entities/user.entity';

export interface UserRepository {
  save(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
}
