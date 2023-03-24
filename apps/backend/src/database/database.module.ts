/* eslint-disable no-useless-catch */
import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';
import { DB_URL } from '../constants';

@Module({
    providers: [{
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<Db> => {
            try {
                const client = await MongoClient.connect(`${DB_URL}`);
                return client.db('interviewPrep');
            } catch (e) {
                throw e;
            }
        }
    }],
    exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule { }
