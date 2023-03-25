import { CategoryService } from './../category/category.service';

import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PostController } from '../post/post.controller';
import { PostService } from '../post/post.service';
import { CategoryController } from '../category/category.controller';
import { SearchModule } from '../search/search.module';
import { SearchController } from '../search/search.controller';
import { SearchService } from '../search/search.service';

@Module({
  imports: [
    DatabaseModule, SearchModule
  ],
  controllers: [AppController, PostController, CategoryController, SearchController],
  providers: [AppService, PostService, CategoryService, SearchService],
})
export class AppModule { }
