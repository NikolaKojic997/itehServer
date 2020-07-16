import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, Index} from 'typeorm';
import {Korisnik} from "./Korisnik.entity";
import {Reziser} from "./Reziser.entity";
import {Zanr} from "./Zanr.entity";
import {Ocena} from "./Ocena.entity";

@Entity()
@Index(["ImeFilma", "GodinaProizvodnje"], { unique: true })
export class Film{
    @PrimaryGeneratedColumn({name: "Film_Id"})
    FilmId: number;
    @Column({name: "Ime_Filma"})
    ImeFilma: string;
    @Column({name: "Godina_proizvodnje"})
    GodinaProizvodnje: number;
    @Column({name: "Trajanje"})
    Trajanje: number;
    @Column({name: "Produkcija"})
    Produkcija: string;

    @ManyToOne(type => Korisnik, korisnik => korisnik.filmovi, {cascade: true, onUpdate: "CASCADE"})
    @JoinColumn({name: "korisnik_id"})
    korisnik: Korisnik;

    @ManyToOne(type => Reziser, reziser => reziser.filmovi,{cascade: true, onUpdate: "CASCADE"})
    @JoinColumn({name: "reziser_id"})
    reziser: Reziser;

    @ManyToOne(type => Zanr, zanr => zanr.filmovi, {cascade: true, onUpdate: "CASCADE"})
    @JoinColumn({name: "zanr_id"})
    zanr: Zanr;
    @OneToMany(type => Ocena, ocena => ocena.film)
    ocene: Ocena[];

}