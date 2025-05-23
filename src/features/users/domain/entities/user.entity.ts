// src/features/users/domain/entities/user.entity.ts
import { Document } from 'mongoose';

export class User extends Document {
  readonly name: string;
  readonly email: string;
  readonly age?: number;
  readonly createdAt: Date;
}
