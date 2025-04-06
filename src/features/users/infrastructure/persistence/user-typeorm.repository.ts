// import { Injectable } from "@nestjs/common";
// import { UserRepository } from "../../domain/repositories/user.repository.interface";
// import { InjectRepository } from '@nestjs/typeorm';
// // user-typeorm.repository.ts
// @Injectable()
// export class UserTypeOrmRepository implements UserRepository {
//   constructor(
//     @InjectRepository(TypeOrmUser)
//     private ormRepo: Repository<TypeOrmUser>
//   ) {}

//   async save(user: User): Promise<User> {
//     const ormUser = UserMapper.toPersistence(user);
//     await this.ormRepo.save(ormUser);
//     return user;
//   }
// }