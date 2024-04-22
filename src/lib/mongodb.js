import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

// Connect to MongoDB when the module is imported
client
    .connect()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

export { client };
