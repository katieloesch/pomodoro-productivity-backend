const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'pomodoro-productivity';

const id = new ObjectId();
console.log(id);
console.log(id.getTimestamp());

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(connectionURL);
    console.log('Connected correctly');

    const db = client.db(dbName);

    // const result = await db.collection('users').insertMany([
    //   {
    //     name: 'Sidney',
    //     age: 17,
    //   },
    //   {
    //     name: 'Laurie',
    //     age: 18,
    //   },
    // ]);

    // console.log('Documents inserted: ', result);

    const result = await db.collection('users').insertOne({
      _id: id,
      name: 'Ripley',
      age: 28,
    });
    console.log('Document inserted with _id:', result.insertedId);

    // const result = await db.collection('tasks').insertMany([
    //   {
    //     description: 'pay utility bills',
    //     completed: false,
    //   },
    //   {
    //     description: 'pay rent',
    //     completed: true,
    //   },
    //   {
    //     description: 'go to pharmacy',
    //     completed: false,
    //   },
    // ]);
    // console.log('Documents inserted: ', result);

    await client.close();
  } catch (error) {
    console.error('Unable to connect to database:', error.message);
  }
}

connectToDatabase();
