import { Injectable } from '@nestjs/common';
import { Item } from './interface/item.interface';
@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: 243234,
      name: 'peter',
      description: 'kanyarwanda',
      qty: 5,
    },
    {
      id: 324234,
      name: 'putin',
      description: 'karasia',
      qty: 5,
    },
    {
      id: 2434,
      name: 'kibwa',
      description: 'kicukiro',
      qty: 5,
    },
  ];
  findAll() {
    return this.items;
  }
  findOne(id: number) {
    return this.items.find((item) => item.id === id);
  }
}
