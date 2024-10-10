import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import keys from './config/keys';
import { ItemSchema } from './items/schemas/item.schema';

@Module({
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
  imports: [
    MongooseModule.forRoot(keys.mongodbUr),
    ItemsModule,
    MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }]),
  ],
})
export class AppModule {}
