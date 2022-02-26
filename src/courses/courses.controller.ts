import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    @Get()
    FindAll() {
        return 'Cursos';
    }
    @Get('id')
    FindList() {
        return 'Cursos encontrado';
    }

    //parametro dinamico
    @Get(':id')
    findOne(@Param() params) {
        return "Curso numero " + params.id
    }
}
