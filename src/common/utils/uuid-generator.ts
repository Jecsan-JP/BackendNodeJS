import { IdGenerator } from '../../features/users/domain/services/id-generator.interface';

export class UuidGenerator implements IdGenerator {
  generate(): string {
    // Implementación REAL con UUID v4
    return crypto.randomUUID(); // Node.js 15+ (o usa el paquete 'uuid')
  }
}
