import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {Korisnik} from "./Korisnik.entity";
import {Reziser} from "./Reziser.entity";
import {Zanr} from "./Zanr.entity";

@Entity()
export class Film{
    @PrimaryGeneratedColumn()
    FilmId: number;
    @Column()
    ImeFilma: string;
    @Column()
    GodinaProizvodnje: number;
    @Column()
    Trajanje: number;
    @Column()
    Produkcija: string;


    @ManyToOne(type => Korisnik, korisnik => korisnik.filmovi)

    korisnik: Korisnik;

    @ManyToOne(type => Reziser, reziser => reziser.filmovi)

    reziser: Reziser;

    @ManyToOne(type => Zanr, zanr => zanr.filmovi)

    zanr: Zanr;

}