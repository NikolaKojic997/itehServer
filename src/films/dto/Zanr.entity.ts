import {Column, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Film} from "./Film.entity";

export class Zanr{
    @PrimaryGeneratedColumn()
    zanrId: number;
    @Column()
    imeZanra: string;
    @OneToMany(type => Film, film => film.zanr)
    filmovi: Film[];
}
