import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {Ocena} from "../entity/Ocena.entity";

@Injectable()
export class GradesService {
    constructor(
        @InjectRepository(Ocena)
        private gradesRepository: Repository<Ocena>,
    ) {}
    async findAll() : Promise<Ocena[]> {
        return this.gradesRepository.find({ relations: ["korisnik", "film"] });
    }

    async findOne(id: number): Promise<Ocena> {
        return this.gradesRepository.findOne(id, { relations: ["korisnik", "film"] })
    }

    async create(ocena:Ocena) : Promise<Ocena>{
        return this.gradesRepository.save(ocena, { });
    }

    async remove(id:number) : Promise<DeleteResult>{
        return this.gradesRepository.delete(id);
    }

    async update(ocena: Ocena, id: any): Promise<UpdateResult> {
        return this.gradesRepository.update(id,ocena);
    }
}
