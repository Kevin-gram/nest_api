import {
  Controller,
  Get,
  Post,
  Body,
  Put,
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
  // @Get()
  // findAll(@Req() req: Request, @Res() res: Response): Response {
  //   console.log(req.url);
  //   return res.send(`this request url ${req.url}`);
  // }
  @Get()
  async findAllItems(): Promise<Item[]> {
    return this.itemService.findAll();
  }
  // @Get(':id')
  // findOne(@Param('id') id): string {
  //   return ` this the item parameter id ${id}`;
  // }
  @Get(':id')
  async findSingleElement(@Param('id') id: string): Promise<Item> {
    return this.itemService.findOne(id);
  }
  @Delete(':id')
  async deleteSengleAndDelete(@Param('id') id: number): Promise<Item> {
    return this.itemService.delete(id);
  }
  // @Post()
  // create(@Body() createItemDto: CreateItemDto) {
  //   return `the name of the item is ${createItemDto.name} the description of the item is ${createItemDto.description} and the quantity of the items is ${createItemDto.qty}`;
  // }
  // @Delete(':id')
  // delete(@Param('id') id: number): string {
  //   return `the item  on the id of ${id} is successfully deleted ;`;
  // }
  // @Put(':id')
  // updateItem(
  //   @Body() updateItem: CreateItemDto,
  //   @Param('id') id: number,
  // ): string {
  //   return ` this is the updated item id ${id} and the updated name is ${updateItem.name}`;
  // }
}
