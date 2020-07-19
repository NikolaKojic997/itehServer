import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Reziser} from "../entity/Reziser.entity";

@Injectable()
export class DirectorsService {
    constructor(
        @InjectRepository(Reziser)
        private directorsRepository: Repository<Reziser>,
    ) {}

    async create(reziser:Reziser) : Promise<Reziser>{
        try {
            return  await this.directorsRepository.save(reziser);
        }
        catch (e) {
            throw new HttpException(
                e.message,
                HttpStatus.BAD_REQUEST
            );
        }

    }
}
