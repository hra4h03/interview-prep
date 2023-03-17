import { Prep } from './models/prep.schema';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class PrepService {

    constructor(@InjectModel('Prep') private readonly _prepModel: Model<Prep>) { }

    async getPosts() {
        const posts = await this._prepModel.find().exec();
        return posts;
    }

    async getPost(postID) {
        const post = await this._prepModel.findById(postID).exec();
        return post;
    }

    async addPost(createPostDTO: CreatePostDTO) {
        const newPost = await this._prepModel.create(createPostDTO);
        return newPost.save();
    }

    async editPost(postID, createPostDTO: CreatePostDTO) {
        const editedPost = await this._prepModel.findByIdAndUpdate(postID, createPostDTO, { new: true });
        return editedPost;
    }

    async deletePost(postID) {
        const deletedPost = await this._prepModel.findByIdAndRemove(postID);
        return deletedPost;
    }
}
