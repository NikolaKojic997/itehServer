import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsModule} from "./films/films.module";
import { Connection } from 'typeorm';
import {UsersModule} from "./users/users.module";
import {GenresModule} from "./genres/genres.module";
import { GradeController } from './grade/grade.controller';
import { GradeService } from './grade/grade.service';
import { GradesController } from './grades/grades.controller';
import { GradesService } from './grades/grades.service';


@Module({
  imports: [TypeOrmModule.forRoot(),FilmsModule, UsersModule, GenresModule],
  controllers: [GradeController, GradesController],
  providers: [GradeService, GradesService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
