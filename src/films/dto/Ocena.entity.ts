import {Korisnik} from "./Korisnik.entity";
import {Film} from "./Film.entity";

export class Ocena{
     korisnik: Korisnik;
     film: Film;
     brojcanaOcena: number;
     komentar: string;
}