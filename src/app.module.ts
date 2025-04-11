// src/app.module.ts
import { Module } from '@nestjs/common';
import { UsersModule } from './features/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule, // Solo necesitas importar el módulo de usuarios una vez
    // Aquí agregarías otros módulos de features (ProductsModule, AuthModule, etc.)
    ConfigModule.forRoot({
      isGlobal: true, // Hace que esté disponible en todos los módulos
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
  ],
  controllers: [], // Los controllers van en sus respectivos módulos de features
  providers: [], // Los providers van en sus respectivos módulos de features
})
export class AppModule {}
