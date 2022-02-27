import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CreateCourseDto } from 'src/entities/courses.antity';
import { FullName, CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(readonly coursesService: CoursesService) {}

  @Get()
  FindAll() {
    return this.coursesService.findAll();
  }
  @Get('id')
  FindList() {
    return 'Cursos encontrado';
  }

  //parametro dinamico
  @Get(':id')
  findOne(@Param('id') id: string, @Res() response) {
    if (id == '1')
      return response.status(401).json({ message: 'Nao autorizado' });
    const user = this.coursesService.findUser(id);
    return response.status(200).json(user);
  }

  @Post()
  @HttpCode(201)
  create(@Body() body: CreateCourseDto) {
    return this.coursesService.created(body);
  }

  @Patch(':id')
  update(@Param(':id') id: string, @Body() body: CreateCourseDto) {
    return this.coursesService.updated(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id, @Res() res) {
    this.coursesService.deleted(id);
    return res.status(204);
  }
}
