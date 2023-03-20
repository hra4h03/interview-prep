// import { MongoClient } from '@nestjs/mongoose';
// let { MongoClient } = require('@nestjs/mongoose')
const { MongoClient } = require('mongodb');
const CATEGORIES = ['misc', 'javascript', 'bash', 'sequelize', 'pc', 'aws', 'react', 'html', 'css', 'nodejs', 'mongo', 'sql', 'git', 'jenkins', 'cicd', 'bitbucket', 'python', 'expressjs'];

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function insertRecords() {
    await client.connect();
    const db = client.db('interviewPrep');
    const collection = db.collection('categories');
    collection.drop();
    const insertResult = await collection.insertOne({ categoryName: CATEGORIES });
    console.log('Inserted documents =>', insertResult);
}

insertRecords();