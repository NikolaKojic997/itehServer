import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Korisnik} from "../entity/Korisnik.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, UpdateResult} from "typeorm";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Korisnik)
        private korisnikRepository: Repository<Korisnik>,
    ) {}

    async findAll() : Promise<Korisnik[]>  {
        return this.korisnikRepository.find();
    }

    async findOne(id: number): Promise<Korisnik> {
        return this.korisnikRepository.findOne(id);
    }

    async create(korisnik: Korisnik): Promise<Korisnik> {
        return this.korisnikRepository.save(korisnik);
    }

    async remove(id: number) : Promise<DeleteResult> {
        return this.korisnikRepository.delete(id);
    }

    async update(korisnik: Korisnik, id: any) : Promise<UpdateResult>{
        return this.korisnikRepository.update(id, korisnik);
    }
}
