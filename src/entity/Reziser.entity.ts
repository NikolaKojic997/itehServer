import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Film} from "./Film.entity";

@Entity()
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