import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Film} from "./Film.entity";

@Entity()
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