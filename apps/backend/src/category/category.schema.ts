import { Document } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
class CategoryDocument extends Document {
    @Prop({ type: String, unique: true, lowercase: true })
    categoryName: string

    @Prop()
    categoryImage: string
}

export type Category = CategoryDocument & Document;
export const categorySchema = SchemaFactory.createForClass(CategoryDocument);