import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.CONN_STRING

// Function to test MongoDB connection
async function testMongoConnection() {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas:', error);
  } finally {
    // Close the Mongoose connection
    mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

export default async (req, res) => {
  // Ensure the request is an HTTP GET request
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Call the MongoDB connection test function
  await testMongoConnection();

  // Return a response indicating success
  res.status(200).json({ message: 'MongoDB connection test successful' });
};
