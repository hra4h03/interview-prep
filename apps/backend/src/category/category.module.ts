import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { categorySchema } from './category.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Category', schema: categorySchema }])
    ],
    providers: [CategoryService],
    controllers: [CategoryController]
})
export class CategoryModule { }
