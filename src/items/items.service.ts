import { Injectable } from '@nestjs/common';
import { Item } from './interface/item.interface';
@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: 24324234,
      name: 'peter',
      description: 'kanyarwanda',
      qty: 5,
    },
  ];
}
