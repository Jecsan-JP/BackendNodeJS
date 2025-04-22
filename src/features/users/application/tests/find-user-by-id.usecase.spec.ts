import { Test, TestingModule } from '@nestjs/testing';
import { IUserRepository } from '../../domain/repositories/user.repository.interface';
import { User } from '../../domain/entities/user.entity';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Types } from 'mongoose';
import { FindUserByIdUseCase } from '../use-cases/find-user-by-id.usecase';

describe('FindUserByIdUseCase', () => {
  let useCase: FindUserByIdUseCase;
  let mockUserRepository: jest.Mocked<IUserRepository>;

  // Mock de un usuario para las pruebas
  const mockUser: User = {
    id: new Types.ObjectId().toString(),
    name: 'Test User',
    email: 'test@example.com',
    age: 25,
    createdAt: new Date(),
    _id: new Types.ObjectId(),
  } as User;

  beforeEach(async () => {
    // Crear un mock del repositorio
    mockUserRepository = {
      findById: jest.fn(),
      create: jest.fn(),
      findAll: jest.fn(),
    } as jest.Mocked<IUserRepository>;

    // Configurar el módulo de prueba
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindUserByIdUseCase,
        {
          provide: 'IUserRepository',
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    useCase = module.get<FindUserByIdUseCase>(FindUserByIdUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  describe('execute', () => {
    it('should return a user when valid ID is provided', async () => {
      // Configurar el mock para devolver un usuario
      mockUserRepository.findById.mockResolvedValue(mockUser);

      const result = await useCase.execute(mockUser.id);

      expect(result).toEqual(mockUser);
      expect(mockUserRepository.findById).toHaveBeenCalledWith(mockUser.id);
    });

    it('should throw BadRequestException when invalid ID is provided', async () => {
      const invalidId = 'invalid-id';

      await expect(useCase.execute(invalidId)).rejects.toThrow(
        BadRequestException,
      );
      expect(mockUserRepository.findById).not.toHaveBeenCalled();
    });

    it('should throw NotFoundException when user is not found', async () => {
      const validId = new Types.ObjectId().toString();
      mockUserRepository.findById.mockResolvedValue(null);

      await expect(useCase.execute(validId)).rejects.toThrow(NotFoundException);
      expect(mockUserRepository.findById).toHaveBeenCalledWith(validId);
    });
  });
});