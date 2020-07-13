import {Controller, Get} from '@nestjs/common';
import {GradesService} from "./grades.service";
import {Ocena} from "../entity/Ocena.entity";

@Controller('grades')
export class GradesController {
    constructor(private readonly gradesService: GradesService){
    }
    @Get()
    findAll() : Promise<Ocena[]>{
        return this.gradesService.findAll();
    }

}
