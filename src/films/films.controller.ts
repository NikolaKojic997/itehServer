import {Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import {Film} from "./dto/Film.entity";
import {FilmsService} from "./films.service";

@Controller('films')
export class FilmsController {


    constructor(private readonly filmsService: FilmsService){

    }


    @Get()
    findAll() : Promise<Film[]>{
        return this.filmsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): string{
        return `film ${param.id}`;
    }

    @Post()
    create(@Body() film: Film): string{
        return `name: ${film.ImeFilma}, godinaProizvodnje: ${film.GodinaProizvodnje}`;
    }

    @Delete(':id')
    remove(@Param() param): string{
        return `deleting film ${param.id}`;
    }

    @Put(':id')
    update(@Body() film: Film, @Param() param ):string{
        return `Updating film with id ${param.id}`
    }

}
