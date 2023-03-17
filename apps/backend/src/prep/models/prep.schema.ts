import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
class PrepDocument {
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
}

export type Prep = PrepDocument & Document;

export const prepSchema = SchemaFactory.createForClass(PrepDocument);