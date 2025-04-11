// // features/users/infrastructure/persistence/user-memory.repository.ts
// import { Injectable } from '@nestjs/common';
// import { User } from '../../domain/entities/user.entity';
// import { UserRepository } from '../../domain/repositories/user.repository.interface';

// @Injectable()
// export class UserMemoryRepository implements UserRepository {
//   private users: User[] = [];

//   async save(user: User): Promise<User> {
//     this.users.push(user);
//     return user;
//   }

//   async findAll(): Promise<User[]> {
//     return [...this.users];
//   }

//   async findById(id: string): Promise<User | null> {
//     return this.users.find((user) => user.id === id) || null;
//   }
// }
