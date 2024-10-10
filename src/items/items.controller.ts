import { Controller, Get, Post, Body, Req, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create_item.dto';
import { Response, Request } from 'express';
@Controller('items')
export class ItemsController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send(`this request url ${req.url}`);
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return `the name of the item is ${createItemDto.name} the description of the item is ${createItemDto.description} and the quantity of the items is ${createItemDto.qty}`;
  }
}
