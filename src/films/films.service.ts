import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Film} from "./dto/Film.entity";
import {Korisnik} from "./dto/Korisnik.entity";


@Injectable()
export class FilmsService {

    constructor(
        @InjectRepository(Film)
        private filmRepository: Repository<Film>,
    ) {}

    async  findAll() : Promise<Film[]> {
        return this.filmRepository.find({ relations: ["korisnik", "reziser","zanr"] });
    }

    async findOne(id: number): Promise<Film> {
       return this.filmRepository.findOne(id, { relations: ["korisnik", "reziser","zanr"] })
    }

    async create(film:Film) : Promise<Film>{
        return this.filmRepository.save(film, { });
    }
}
