import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { postSchema } from '../dto/create-post.dto';

@Injectable()
export class ValidateObjectId implements PipeTransform {
    async transform(value: string, metadata: ArgumentMetadata) {
        const isValid = mongoose.Types.ObjectId.isValid(value);
        if (!isValid) throw new BadRequestException('Invalid ID!');
        return value;
    }
}

export class ValidatePost implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        const result = postSchema.validate(value)
        if (result.error) {
            const errorMessages = result.error.details.map((d) => d.message).join();
            throw new BadRequestException(errorMessages);
        }
        return value;
    }
}