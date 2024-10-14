import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Req,
  Res,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create_item.dto';
import { Response, Request } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interface/item.interface';
@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  async findAllItems(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  async findSingleElement(@Param('id') id: string): Promise<Item> {
    return this.itemService.findOne(id);
  }
  @Delete(':id')
  async deleteSengleAndDelete(@Param('id') id: number): Promise<Item> {
    return this.itemService.delete(id);
  }
  @Post()
  async postItem(@Body() item: Item): Promise<Item> {
    return this.itemService.post(item);
  }
  @Patch(':id')
  async updateItem(@Param('id') id: string, @Body() item: Item): Promise<Item> {
    return this.itemService.update(id, item);
  }
  @Put(':id')
  async updateAll(@Param('id') id: string, @Body() item: Item): Promise<Item> {
    return this.itemService.updateAll(id, item);
  }
}
