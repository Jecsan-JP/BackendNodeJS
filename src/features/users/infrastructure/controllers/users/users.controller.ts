import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/features/users/application/dto/create-user.dto';
import { CreateUserUseCase } from 'src/features/users/application/use-cases/create-user.usecase';
import { GetUsersUseCase } from 'src/features/users/application/use-cases/get-users-usecase';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUsersUseCase: GetUsersUseCase,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }

  @Get()
  async findAll() {
    return this.getUsersUseCase.execute();
  }
}
