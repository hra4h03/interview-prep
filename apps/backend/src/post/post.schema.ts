import { Category } from './../category/category.schema';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
class PostDocument extends Document {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author?: string;

    @Prop()
    createdAt?: Date

    @Prop()
    updatedAt?: Date

    // @Prop()
    // categoryName: []

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' })
    categoryName: Category

    @Prop()
    categoryImage: string
}

export type Post = PostDocument & Document;

export const postSchema = SchemaFactory.createForClass(PostDocument);