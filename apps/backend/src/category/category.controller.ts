import { CategoryService } from './category.service';
import { Controller, Get, Res, HttpStatus } from '@nestjs/common';

@Controller('blog')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Get('categories')
    async getPosts(@Res() res) {
        const categories = await this.categoryService.getCategories();
        return res.status(HttpStatus.OK).json(categories);
    }
}
