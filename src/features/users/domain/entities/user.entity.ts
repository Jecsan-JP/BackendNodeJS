import { CreateUserDto } from '../../application/dto/create-user.dto';
import { IdGenerator } from '../services/id-generator.interface';

export class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
  ) {}

  static create(dto: CreateUserDto, idGenerator: IdGenerator): User {
    // Validaciones de dominio
    return new User(idGenerator.generate(), dto.name, dto.email);
  }
}
