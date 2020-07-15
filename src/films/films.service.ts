import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
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
       const film = await this.filmRepository.findOne(id, { relations: ["korisnik", "reziser","zanr"] })
       if (!film){
           throw new HttpException(
               "Film with given id not found",
               HttpStatus.BAD_REQUEST
           )
       }
       return film;
}

    // insert reziser first!!
    // Zanr and korisnik will always be in the base
    async create(film:Film) : Promise<Film>{
        return this.filmRepository.save(film, { });
    }

    async remove(id:number) : Promise<DeleteResult>{
        const film = await this.filmRepository.delete(id)
        if (film.raw.affectedRows === 0){
            throw new HttpException(
                "Film with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return film;
    }

    async update(film: Film, id: any): Promise<UpdateResult> {
        return this.filmRepository.update(id,film);
    }
}
