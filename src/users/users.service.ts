import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

  async getAll() {
    return await this.UserModel.find().exec();
  }

  async getById(id: string) {
    return await this.UserModel.findOne({ _id: id }).exec();
  }

  async created(user: User) {
    const createUser = new this.UserModel(user);
    return await createUser.save();
  }

  async updated(id: string, user: User) {
    await this.UserModel.updateOne({ _id: id }, user).exec();
    return await this.getById(id);
  }

  async deleted(id: string) {
    await this.UserModel.deleteOne({ _id: id }).exec();
  }
}
