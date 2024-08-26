const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'pomodoro-productivity';

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(connectionURL);
    console.log('Connected correctly');

    const db = client.db(dbName);

    // CREATE
    // const result = await db.collection('users').insertOne({
    //   name: 'Ripley',
    //   age: 28,
    // });
    // console.log('Document inserted with _id:', result.insertedId);

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

    // READ
    const result = await db
      .collection('users')
      .findOne({ _id: new ObjectId('66cba12ab507252ccecacdf5') });

    if (result) {
      console.log('Found a document:', result);
    } else {
      console.log('No document matches the provided query.');
    }

    await client.close();
  } catch (error) {
    console.error('Unable to connect to database:', error);
  }
}

connectToDatabase();
