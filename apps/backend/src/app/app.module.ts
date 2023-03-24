import { CategoryService } from './../category/category.service';

import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PostController } from '../post/post.controller';
import { PostService } from '../post/post.service';
import { CategoryController } from '../category/category.controller';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [AppController, PostController, CategoryController],
  providers: [AppService, PostService, CategoryService],
})
export class AppModule { }
