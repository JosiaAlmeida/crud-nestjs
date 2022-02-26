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

interface FullName {
  nome: string;
  apelido: string;
}

@Controller('courses')
export class CoursesController {
  listUser: FullName[] = [];

  @Get()
  FindAll() {
    return this.listUser.map((item) => item);
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
  create(@Body() body: FullName) {
    this.listUser.push(body);
    return body;
  }

  @Patch(':id')
  update(@Param(':id') id: string, @Body() body: FullName) {
    const data = this.listUser.filter(
      (item, i) => i.toString() == id && item,
    )[0];

    return this.listUser.filter((item, i) => {
      if (i.toString() == id) item.nome.replace(data.nome, body.nome);
    });
  }

  @Delete(':id')
  remove(@Param('id') id, @Res() res) {
    return res.status(200).json({ message: 'eliminado com sucesso ' + id });
  }
}
