import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UserService } from './app.service';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.USERDB,
      password: process.env.PASSDB,
      database: process.env.DB,
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule {}
