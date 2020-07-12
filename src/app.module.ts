import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsModule} from "./films/films.module";
import { Connection } from 'typeorm';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import {UsersModule} from "./users/users.module";


@Module({
  imports: [TypeOrmModule.forRoot(),FilmsModule, UsersModule]

})
export class AppModule {
  constructor(private connection: Connection) {}
}
