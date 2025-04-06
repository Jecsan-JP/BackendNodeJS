import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository.interface';
import { IdGenerator } from '../../domain/services/id-generator.interface';
import { CreateUserDto } from '../dto/create-user.dto';

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly idGenerator: IdGenerator,
  ) {}

  async execute(dto: CreateUserDto): Promise<User> {
    // Creamos el usuario usando el generador
    const user = User.create(dto, this.idGenerator);

    // Aquí podrías añadir más lógica de aplicación si es necesario
    return this.userRepository.save(user);
  }
}
