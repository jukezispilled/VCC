import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const MONGO_URI = process.env.CONN_STRING; // Replace with your MongoDB Atlas connection string

export default async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // You can add further MongoDB operations or queries here if needed.

    client.close(); // Close the MongoDB connection

    // Send a success response
    res.status(200).json({ message: 'Connected to MongoDB Atlas' });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    res.status(500).json({ message: 'Failed to connect to MongoDB' });
  }
};
