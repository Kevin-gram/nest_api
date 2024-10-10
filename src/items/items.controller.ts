import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create_item.dto';
@Controller('items')
export class ItemsController {
  @Get()
  findAll() {
    return 'this a rout for get request ';
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return `the name of the item is ${createItemDto.name} the description of the item is ${createItemDto.description} and the quantity of the items is ${createItemDto.qty}`;
  }
}
