import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
