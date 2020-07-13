import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Film} from "../entity/Film.entity";
import {Repository} from "typeorm";
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
}
