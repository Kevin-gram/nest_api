import { Injectable } from '@nestjs/common';
import { Item } from './interface/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemsModel: Model<Item>) {}
  async findAll(): Promise<Item[]> {
    return await this.itemsModel.find();
  }
  async findOne(id: string): Promise<Item> {
    return await this.itemsModel.findById(id).exec();
  }
  async delete(id: number): Promise<Item> {
    return await this.itemsModel.findByIdAndDelete(id).exec();
  }
}
