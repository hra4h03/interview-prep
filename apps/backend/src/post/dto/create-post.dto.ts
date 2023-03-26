import { CATEGORIES } from '../../constants';
import { IsNotEmpty } from 'class-validator';
import Joi from 'joi';

export const postSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().default('Kiriti Komaragiri'),
    categoryId: Joi.string().required(),
    categoryName: Joi.string().valid(...CATEGORIES).required(),
    categoryImage: Joi.string().required(),
}).options({
    abortEarly: false,
});

export class CreatePostDTO {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    @IsNotEmpty()
    readonly categoryId: string;
    readonly categoryImage: string;
}