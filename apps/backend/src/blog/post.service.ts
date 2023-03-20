import { Post } from './models/post.schema';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class PostService {

    constructor(@InjectModel('Post') private readonly _postModel: Model<Post>) { }

    async getPosts() {
        const posts = await this._postModel.find().exec();
        return posts;
    }

    async getLatestPosts() {
        const posts = await this._postModel.find({}).sort({ $natural: -1 }).skip(0).limit(10).exec();

        return posts;
    }

    async getPost(postID) {
        const post = await this._postModel.findById(postID).exec();
        return post;
    }

    async addPost(createPostDTO: CreatePostDTO) {
        const newPost = await this._postModel.create(createPostDTO);
        return newPost.save();
    }

    async editPost(postID, createPostDTO: CreatePostDTO) {
        const editedPost = await this._postModel.findByIdAndUpdate(postID, createPostDTO, { new: true });
        return editedPost;
    }

    async deletePost(postID) {
        const deletedPost = await this._postModel.findByIdAndRemove(postID);
        return deletedPost;
    }
}
