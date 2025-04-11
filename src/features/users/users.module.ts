// features/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './infrastructure/controllers/users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './infrastructure/persistence/schemas/user.schema';
import { ConfigModule } from '@nestjs/config';
import { CreateUserUseCase } from './application/use-cases/create-user.usecase';
import { FindAllUsersUseCase } from './application/use-cases/find-all-users.usecase';
import { FindUserByIdUseCase } from './application/use-cases/find-user-by-id.usecase';
import { UserRepository } from './infrastructure/persistence/user.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ConfigModule,
  ],
  controllers: [UsersController],
  providers: [
    CreateUserUseCase,
    FindAllUsersUseCase,
    FindUserByIdUseCase,
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    // {
    //   provide: 'IdGenerator',
    //   useClass: UuidGenerator, // Proveemos la implementación concreta
    // },
    // {
    //   provide: 'UserRepository',
    //   useClass: UserMemoryRepository, // Datos estaticos aqui despues se implementaria el ORM hacia la BD
    // },
    // {
    //   provide: CreateUserUseCase,
    //   useFactory: (userRepository, idGenerator) => {
    //     return new CreateUserUseCase(userRepository, idGenerator);
    //   },
    //   inject: ['UserRepository', 'IdGenerator'], // Dependencias requeridas
    // },
    // {
    //   provide: GetUsersUseCase,
    //   useFactory: (userRepository) => {
    //     return new GetUsersUseCase(userRepository);
    //   },
    //   inject: ['UserRepository'],
    // },
  ],
})
export class UsersModule {}
