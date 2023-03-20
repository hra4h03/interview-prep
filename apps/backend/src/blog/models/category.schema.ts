import { Document } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
class CategoryDocument extends Document {
    @Prop()
    categoryName: [string]

    @Prop()
    categoryImage: string
}

// export type Category = CategoryDocument & Document;
export const CategorySchema = SchemaFactory.createForClass(CategoryDocument);