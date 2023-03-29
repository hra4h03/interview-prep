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
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IndexService } from '../indexing/indexService';

@Module({
  imports: [
    DatabaseModule, SearchModule, ConfigModule
  ],
  controllers: [AppController, PostController, CategoryController, SearchController],
  providers: [AppService, PostService, CategoryService, ConfigService, IndexService],
})
export class AppModule { }
