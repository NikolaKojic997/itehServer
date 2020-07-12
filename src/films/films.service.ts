import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Film} from "./dto/Film.entity";


@Injectable()
export class FilmsService {

    constructor(
        @InjectRepository(Film)
        private projectRepository: Repository<Film>,
    ) {}


    async  findAll() : Promise<Film[]> {
        return this.projectRepository.find({ relations: ["korisnik", "reziser","zanr"] });
    }
}
