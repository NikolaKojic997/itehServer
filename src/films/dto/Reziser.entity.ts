import {Column, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Film} from "./Film.entity";

export class Reziser{
    @PrimaryGeneratedColumn()
    ReziserId: number;
    @Column()
    imeRezisera: string;
    @Column()
    prezimeRezisera: string;

    @OneToMany(type => Film, film => film.reziser)
    filmovi: Film[];
}