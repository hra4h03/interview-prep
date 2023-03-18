import { IsNotEmpty } from 'class-validator';
export class CreatePostDTO {
    readonly title: string;
    readonly description: string;
    readonly body: string;
    readonly author: string;
    @IsNotEmpty()
    readonly category: string
}