import { Module } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { PostController } from '../controllers/post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { postSchema } from '../models/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: postSchema }])
  ],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule { }
