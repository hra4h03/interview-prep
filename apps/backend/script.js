const { MongoClient } = require('mongodb');
// const CATEGORIES = ['misc', 'javascript', 'bash', 'sequelize', 'pc', 'aws', 'react', 'html', 'css', 'nodejs', 'mongo', 'sql', 'git', 'jenkins', 'cicd', 'bitbucket', 'python', 'expressjs'];
const CATEGORIES = [
    { categoryName: 'misc' },
    { categoryName: 'javascript' },
    { categoryName: 'aws' },
    { categoryName: 'react' },
    { categoryName: 'html' },
    { categoryName: 'css' },
    { categoryName: 'nodejs' },
    { categoryName: 'mongo' },
    { categoryName: 'sql' },
    { categoryName: 'git' },
    { categoryName: 'jenkins' },
    { categoryName: 'cicd' },
    { categoryName: 'bitbucket' },
    { categoryName: 'python' }
];

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function insertRecords() {
    await client.connect();
    const db = client.db('interviewPrep');
    const collection = db.collection('categories');
    collection.drop();
    const insertResult = await collection.insertMany(CATEGORIES);
    console.log('Inserted documents =>', insertResult);
}

insertRecords();