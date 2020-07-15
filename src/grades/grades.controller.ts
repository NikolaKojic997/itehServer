import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {GradesService} from "./grades.service";
import {Ocena} from "../entity/Ocena.entity";
import {DeleteResult, UpdateResult} from "typeorm";

@Controller('grades')
export class GradesController {
    constructor(private readonly gradesService: GradesService){
    }
    @Get()
    findAll() : Promise<Ocena[]>{
        return this.gradesService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Promise<Ocena>{
        return this.gradesService.findOne(param.id);
    }

    @Post()
    create(@Body() ocena: Ocena):  Promise<Ocena>{
        return this.gradesService.create(ocena);
    }

    @Delete(':id')
    remove(@Param() param): Promise<DeleteResult>{
        return this.gradesService.remove(param.id);
    }

    @Put(':id')
    update(@Body() ocena: Ocena, @Param() param ):Promise<UpdateResult>{
        return this.gradesService.update(ocena,param.id);
    }
}
