import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Body,
} from '@nestjs/common';
import { User } from './interface/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}
  @Get()
  async getAll(): Promise<User[]> {
    return this.service.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string): Promise<User> {
    return await this.service.getById(id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.service.created(user);
  }

  @Put(':id')
  async update(@Param('id') id: string, user: User): Promise<User> {
    return await this.service.updated(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.service.deleted(id);
  }
}
