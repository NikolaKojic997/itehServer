import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Film} from "./Film.entity";
import {Ocena} from "./Ocena.entity";
import {IsEmail, IsNumber, IsString} from "class-validator"

@Entity()
export class Korisnik{

     @PrimaryGeneratedColumn()
     @IsNumber()
     KorisnikId: number;

     @Column({unique: true})
     @IsString()
     Username: string;

     @Column()
     @IsString()
     Password: string;

     @Column({unique: true})
     @IsString()
     Email: string;

     @Column()
     @IsString()
     Uloga: string;

     @OneToMany(type => Film, film => film.korisnik)
     filmovi: Film[];

     @OneToMany(type => Ocena, ocena => ocena.korisnik)
     ocene: Ocena[];
}