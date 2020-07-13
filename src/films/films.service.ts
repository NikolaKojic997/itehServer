import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {DeleteResult, Repository, UpdateResult} from 'typeorm';
import {Film} from "../entity/Film.entity";
// import {Korisnik} from "../entity/Korisnik.entity";

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

    // insert reziser first!!
    // Zanr and korisnik will always be in the base
    async create(film:Film) : Promise<Film>{
        return this.filmRepository.save(film, { });
    }

    async remove(id:number) : Promise<DeleteResult>{
        return this.filmRepository.delete(id);
    }

    async update(film: Film, id: any): Promise<UpdateResult> {
        return this.filmRepository.update(id,film);
    }
}
