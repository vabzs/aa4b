const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const database = 'student';
const client = new MongoClient(url);

const dbConnect = async () => {
    const result = await client.connect(); // Connect to MongoDB
    const db = await result.db(database);  // Select the database
    return db.collection('profile');       // Access the "profile" collection
}

module.exports = dbConnect;
