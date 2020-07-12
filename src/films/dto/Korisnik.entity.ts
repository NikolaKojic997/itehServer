import {Column, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Film} from "./Film.entity";

export class Korisnik{

     @PrimaryGeneratedColumn()
     KorisnikId: number;
     @Column()
     Username: string;
     @Column()
     Password: string;
     @Column()
     Uloga: string;

     @OneToMany(type => Film, film => film.korisnik)
     filmovi: Film[];
}