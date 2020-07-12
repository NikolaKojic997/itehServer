import {Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import {CreateFilmDto} from "./dto/Film.entity";

@Controller('films')
export class FilmsController {
    @Get()
    findAll() : string{
        return "Get all films";
    }

    @Get(':id')
    findOne(@Param() param): string{
        return `film ${param.id}`;
    }

    @Post()
    create(@Body() film: CreateFilmDto): string{
        return `name: ${film.ImeFilma}, godinaProizvodnje: ${film.GodinaProizvodnje}`;
    }

    @Delete(':id')
    remove(@Param() param): string{
        return `deleting film ${param.id}`;
    }

    @Put(':id')
    update(@Body() film: CreateFilmDto, @Param() param ):string{
        return `Updating film with id ${param.id}`
    }

}
