import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsModule} from "./films/films.module";
import { Connection } from 'typeorm';


@Module({
  imports: [TypeOrmModule.forRoot(),FilmsModule]

})
export class AppModule {
  constructor(private connection: Connection) {}
}
