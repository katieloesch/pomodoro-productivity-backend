const { MongoClient } = require('mongodb');

// Connection URL
const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'pomodoro-productivity';

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(connectionURL);
    console.log('Connected correctly');

    const db = client.db(dbName);

    // const result = await db.collection('users').insertMany([
    //   {
    //     name: 'Pearl',
    //     age: 87,
    //   },
    //   {
    //     name: 'Maxine',
    //     age: 22,
    //   },
    // ]);

    // console.log('Documents inserted: ', result);

    const result = await db.collection('users').insertOne({
      name: 'Nancy',
      age: 17,
    });
    console.log('Document inserted with _id:', result.insertedId);

    // const result = await db.collection('tasks').insertMany([
    //   {
    //     description: 'do dishes',
    //     completed: false,
    //   },
    //   {
    //     description: 'grocery shopping',
    //     completed: true,
    //   },
    //   {
    //     description: 'go to post office',
    //     completed: false,
    //   },
    // ]);
    // console.log('Documents inserted: ', result);

    // await client.close();
  } catch (error) {
    console.error('Unable to connect to database:', error.message);
  }
}

connectToDatabase();
