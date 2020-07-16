import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Film} from "./Film.entity";
import {IsInt, IsString} from "class-validator"

@Entity()
export class Zanr{
    @PrimaryGeneratedColumn()
    @IsInt()
    zanrId: number;
    
    @Column({unique: true})
    @IsString()
    imeZanra: string;
    @OneToMany(type => Film, film => film.zanr)
    filmovi: Film[];
}
