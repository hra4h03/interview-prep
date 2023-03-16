import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class PrepService {

    constructor(@InjectModel('Post') private readonly postModel) { }

    async getPosts() {
        const posts = await this.postModel.find().exec();
        return posts;
    }

    async getPost(postID) {
        const post = await this.postModel
            .findById(postID)
            .exec();
        return post;
    }

    async addPost(createPostDTO: CreatePostDTO) {
        const newPost = await this.postModel(createPostDTO);
        return newPost.save();
    }

    async editPost(postID, createPostDTO: CreatePostDTO) {
        const editedPost = await this.postModel
            .findByIdAndUpdate(postID, createPostDTO, { new: true });
        return editedPost;
    }

    async deletePost(postID) {
        const deletedPost = await this.postModel
            .findByIdAndRemove(postID);
        return deletedPost;
    }
}
