import { Injectable, Inject } from '@nestjs/common';
import { CreatePostDTO } from './dto/create-post.dto';
import { Db } from 'mongodb';

@Injectable()
export class PostService {

    private blogCollection = this.db.collection('posts');
    private catCollection = this.db.collection('categories');

    constructor(@Inject('DATABASE_CONNECTION') private db: Db) { }

    async getPosts() {
        return this.blogCollection.find({}).toArray();
    }

    async getLatestPosts() {
        const posts = this.db.collection('posts').find({}).sort({ $natural: -1 }).skip(0).limit(10);
        return posts;
    }

    async getPost(postID) {
        const post = await this.blogCollection.findOne(postID);
        return post;
    }

    async getPostsByCategory(categoryId) {
        const posts = this.blogCollection.aggregate([
            {
                $lookup: {
                    from: "categories",
                    localField: categoryId,
                    foreignField: '_id',
                    as: "posts_by_categories"
                }
            },
            { $match: { categoryId: categoryId } },
            {
                $project: {
                    "posts_by_categories": 0
                }
            }
        ])
        return posts;
    }

    async addPost(createPostDTO: CreatePostDTO) {
        const inserted = await this.blogCollection.insertOne(createPostDTO, {});
        const post = await this.blogCollection.findOne({ _id: inserted.insertedId });
        return post;
    }

    // async editPost(postID, createPostDTO: CreatePostDTO) {
    //     const editedPost = await this.db.collection('posts').findByIdAndUpdate(postID, createPostDTO, { new: true });
    //     return editedPost;
    // }

    async deletePost(postID) {
        const deletedPost = await this.db.collection('posts').findOneAndDelete(postID);
        return deletedPost;
    }
}
