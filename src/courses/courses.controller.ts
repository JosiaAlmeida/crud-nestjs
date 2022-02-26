import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Res,
} from '@nestjs/common';

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
  findOne(@Param('id') id: string, @Res() response) {
    if (id == '1')
      return response.status(401).json({ message: 'Nao autorizado' });
    response.status(200).json({ message: 'Curso numero ' + id });
  }

  @Post()
  @HttpCode(201)
  create(@Body() body) {
    return body;
  }
  // @Post()
  // createPost(@Body('name') name: string) {
  //     return name
  // }
}
