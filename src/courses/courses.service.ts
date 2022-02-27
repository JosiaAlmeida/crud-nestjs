import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from 'src/entities/courses.antity';

export interface FullName {
  nome: string;
  apelido: string;
}

@Injectable()
export class CoursesService {
  listUser: CreateCourseDto[] = [];

  findAll() {
    return this.listUser;
  }

  findUser(id: string) {
    return this.listUser.filter((item, i) => i + 1 == Number(id));
  }

  created(body: CreateCourseDto) {
    this.listUser.push(body);
    return body;
  }

  updated(id: string, body: CreateCourseDto) {
    const data = this.listUser.findIndex(
      (item, i) => i.toString() == id && item,
    )[0];

    return (this.listUser[data] = body);
  }

  deleted(id: string) {
    this.listUser.slice(Number(id));
  }
}
