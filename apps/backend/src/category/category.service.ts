import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class CategoryService {

    private catCollection = this.db.collection('categories');

    constructor(@Inject('DATABASE_CONNECTION') private db: Db) { }

    async getCategories() {
        return await this.catCollection.find({}).toArray();
    }
}
