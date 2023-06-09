import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, UsePipes, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { ValidateObjectId, ValidatePost } from './pipes/validation-pipes';

@Controller('blog')
export class PostController {
    constructor(private postService: PostService) { }

    @Get('posts')
    async getPosts(@Res() res) {
        const posts = await this.postService.getPosts();
        return res.status(HttpStatus.OK).json(posts);
    }

    @Get('slice')
    async getSlice(@Res() res, @Query() query) {
        const posts = await this.postService.getSlice(query.start, query.limit);
        return res.status(HttpStatus.OK).json(posts);
    }

    @Get('popular')
    async getPopularPosts(@Res() res) {
        const posts = await this.postService.getPopularPosts();
        return res.status(HttpStatus.OK).json(posts);
    }

    @Get('post/:postID')
    async getPost(@Res() res, @Param('postID', new ValidateObjectId()) postID) {
        const post = await this.postService.getPost(postID);
        if (!post) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json(post);
    }

    @Get('posts/category/:categoryName')
    async getPostsByCategory(@Res() res, @Param('categoryName',) categoryName) {
        const posts = await (await this.postService.getPostsByCategory(categoryName)).toArray();
        if (!posts) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json(posts);
    }

    @UsePipes(ValidatePost)
    @Post('/post')
    async addPost(@Res() res, @Body() createPostDTO: CreatePostDTO) {
        const newPost = await this.postService.addPost(createPostDTO);
        return res.status(HttpStatus.OK).json({
            message: "Post has been submitted successfully!",
            post: newPost
        })
    }

    // @Put('/edit')
    // async editPost(
    //     @Res() res,
    //     @Query('postID', new ValidateObjectId()) postID,
    //     @Body() createPostDTO: CreatePostDTO
    // ) {
    //     const editedPost = await this.postService.editPost(postID, createPostDTO);
    //     if (!editedPost) throw new NotFoundException('Post does not exist!');
    //     return res.status(HttpStatus.OK).json({
    //         message: 'Post has been successfully updated',
    //         post: editedPost
    //     })
    // }

    // @Delete('/delete')
    // async deletePost(@Res() res, @Query('postID', new ValidateObjectId()) postID) {
    //     const deletedPost = await this.postService.deletePost(postID);
    //     if (!deletedPost) throw new NotFoundException('Post does not exist!');
    //     return res.status(HttpStatus.OK).json({
    //         message: 'Post has been deleted!',
    //         post: deletedPost
    //     })
    // }
}
