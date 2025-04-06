// features/users/users.module.ts
import { Module } from '@nestjs/common';
import { UuidGenerator } from '../../common/utils/uuid-generator';
import { CreateUserUseCase } from './application/use-cases/create-user.usecase';
import { UsersController } from './infrastructure/controllers/users/users.controller';
import { GetUsersUseCase } from './application/use-cases/get-users-usecase';
import { UserMemoryRepository } from './infrastructure/persistence/user-memory.repository';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'IdGenerator',
      useClass: UuidGenerator, // Proveemos la implementación concreta
    },
    {
      provide: 'UserRepository',
      useClass: UserMemoryRepository, // Datos estaticos aqui despues se implementaria el ORM hacia la BD
    },

    {
      provide: CreateUserUseCase,
      useFactory: (userRepository, idGenerator) => {
        return new CreateUserUseCase(userRepository, idGenerator);
      },
      inject: ['UserRepository', 'IdGenerator'], // Dependencias requeridas
    },
    {
      provide: GetUsersUseCase,
      useFactory: (userRepository) => {
        return new GetUsersUseCase(userRepository);
      },
      inject: ['UserRepository'],
    },
  ],
})
export class UsersModule {}
