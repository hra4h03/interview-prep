import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
class PrepDocument extends Document {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    body: string;

    @Prop()
    author: string;

    @Prop()
    createdAt?: Date

    @Prop()
    updatedAt?: Date

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'CategoryDocument' })
    category: MongooseSchema.Types.ObjectId
}

export type Prep = PrepDocument & Document;

export const prepSchema = SchemaFactory.createForClass(PrepDocument);