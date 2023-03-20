import { Injectable } from '@nestjs/common';
import { Category } from './category.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {

    constructor(@InjectModel('Category') private readonly _categoryModel: Model<Category>) { }

    async getCategories() {
        const categories = await this._categoryModel.find({}).exec();
        return categories;
    }
}
