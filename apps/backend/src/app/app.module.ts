import { PostService } from '../blog/post.service';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from '../blog/post.controller';
import { postSchema } from '../blog/models/post.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/interview-post', { useNewUrlParser: true }),
    MongooseModule.forFeature([{ name: 'Post', schema: postSchema }])
  ],
  controllers: [AppController, PostController],
  providers: [AppService, PostService],
})
export class AppModule { }
