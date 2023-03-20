
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { postSchema } from '../post/post.schema';
import { categorySchema } from './../category/category.schema';

import { PostController } from '../post/post.controller';
import { CategoryController } from '../category/category.controller';

import { PostService } from '../post/post.service';
import { CategoryService } from './../category/category.service';

const DB_URL = `mongodb://localhost:27017/interviewPrep`;

@Module({
  imports: [
    MongooseModule.forRoot(DB_URL, { useNewUrlParser: true }),
    MongooseModule.forFeature([
      { name: 'Post', schema: postSchema },
      { name: 'Category', schema: categorySchema }
    ])
  ],
  controllers: [AppController, PostController, CategoryController],
  providers: [AppService, PostService, CategoryService],
})
export class AppModule { }
