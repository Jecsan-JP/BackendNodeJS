import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/features/users/application/dto/create-user.dto';
import { CreateUserUseCase } from 'src/features/users/application/use-cases/create-user.usecase';
import { FindAllUsersUseCase } from 'src/features/users/application/use-cases/find-all-users.usecase';
import { FindUserByIdUseCase } from 'src/features/users/application/use-cases/find-user-by-id.usecase';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findAllUsersUseCase: FindAllUsersUseCase,
    private readonly findUserByIdUseCase: FindUserByIdUseCase,
  ) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return this.createUserUseCase.execute(dto);
  }

  @Get()
  async findAll() {
    return this.findAllUsersUseCase.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.findUserByIdUseCase.execute(id);
  }
}
