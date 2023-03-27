/* eslint-disable prefer-const */
import { SearchService } from './../search/search.service';
import { Injectable, Inject } from '@nestjs/common';
import { CreatePostDTO } from './dto/create-post.dto';
import { Db, ObjectId } from 'mongodb';

@Injectable()
export class PostService {

    private blogCollection = this.db.collection('posts');
    private catCollection = this.db.collection('categories');

    constructor(@Inject('DATABASE_CONNECTION') private db: Db, private searchService: SearchService) { }

    async getPosts() {
        return this.blogCollection.find({}).toArray();
    }

    async getPopularPosts() {
        return this.blogCollection.find({}).sort({ $natural: -1 }).skip(0).limit(5).toArray();
    }

    async getPost(postID) {
        const o_id = new ObjectId(postID);
        const post = await this.blogCollection.findOne({ "_id": o_id });
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
        const { title, description, categoryId, categoryName, categoryImage } = post;
        this.searchService.createIndexType();
        const postId = (post._id).toString();
        const indexPost = { id: postId, title, description, categoryId, categoryName, categoryImage }
        await this.searchService.indexQuestion(indexPost)
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
