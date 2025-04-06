// src/app.module.ts
import { Module } from '@nestjs/common';
import { UsersModule } from './features/users/users.module';

@Module({
  imports: [
    UsersModule, // Solo necesitas importar el módulo de usuarios una vez
    // Aquí agregarías otros módulos de features (ProductsModule, AuthModule, etc.)
  ],
  controllers: [], // Los controllers van en sus respectivos módulos de features
  providers: [], // Los providers van en sus respectivos módulos de features
})
export class AppModule {}
