import {Korisnik} from "./Korisnik.entity";
import {Film} from "./Film.entity";
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm"


@Entity()
export class Ocena{

     @PrimaryGeneratedColumn()
     public ocenaId!: number;

     @ManyToOne(type => Korisnik, korisnik => korisnik.ocene,{cascade: true, onUpdate: "CASCADE"})
     @JoinColumn({name: "korisnikId"})
     korisnik: Korisnik;

     @ManyToOne(type => Film, film => film.ocene,{cascade: true, onUpdate: "CASCADE"})
     @JoinColumn({name: "filmId"})
     film: Film;

     @Column({name: "brojcana_ocena"})
     brojcanaOcena: number;

     @Column()
     komentar: string;
}