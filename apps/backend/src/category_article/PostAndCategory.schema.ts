import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
class PostAndCategoryDocument extends Document {
    @Prop()
    post_id: string;

    @Prop()
    categoryName: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Post' })
    posts: [];
}

export type PostCategory = PostAndCategoryDocument & Document;

export const postAndCategoryDocument = SchemaFactory.createForClass(PostAndCategoryDocument);