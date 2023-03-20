import { Document } from 'mongoose';
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

    @Prop()
    categoryName: [string]

    @Prop()
    categoryImage: string
}

export type Post = PostDocument & Document;

export const postSchema = SchemaFactory.createForClass(PostDocument);