import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create_item.dto';
@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'this rout is for getting all items';
  }
  @Post()
  creatItem(@Body createItemDto: CreateItemDto): string {
    return `Name:${createItemDto.name} Description :${createItemDto.description} Quantity:${createItemDto.qty}`;
  }
}
