import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Film} from "./Film.entity";

@Entity()
export class Zanr{
    @PrimaryGeneratedColumn()
    zanrId: number;
    @Column()
    imeZanra: string;
    @OneToMany(type => Film, film => film.zanr)
    filmovi: Film[];
}
