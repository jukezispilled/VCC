import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const CONN_STRING = process.env.CONN_STRING; // Replace with your MongoDB Atlas connection string

export default async (req, res) => {
  try {
    const client = new MongoClient(CONN_STRING, {
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
