import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from "./users.service";
import {Film} from "../entity/Film.entity";
import {DeleteResult, UpdateResult} from "typeorm";
import {Korisnik} from "../entity/Korisnik.entity";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){

    }

    @Get()
    findAll(@Param() param) : Promise<Korisnik[]>{
        return this.usersService.findAll();
    }


    @Get(':id')
    findOne(@Param() param): Promise<Korisnik>{
        return this.usersService.findOne(param.id);
    }

    @Post()
    create(@Body() korisnik: Korisnik):  Promise<Korisnik>{
        return this.usersService.create(korisnik);
    }

    @Delete(':id')
    remove(@Param() param): Promise<DeleteResult>{
        return this.usersService.remove(param.id);
    }

    @Put(':id')
    update(@Body() korisnik: Korisnik, @Param() param ):Promise<UpdateResult>{
        return this.usersService.update(korisnik,param.id);
    }
}
