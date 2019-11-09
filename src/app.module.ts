import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './cars/car.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jsday',
      password: 'jsday',
      database: 'jsday',
      entities: ["src/**/**.entity{.ts,.js}"],
      synchronize: true,
    }),
    CarModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
