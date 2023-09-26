import mongoose from 'mongoose';

const CON_STRING = process.env.MONGODB_URI; // Replace with your MongoDB Atlas connection string

export default async (req, res) => {
  try {
    // Connect to MongoDB Atlas using Mongoose
    await mongoose.connect(CON_STRING);

    // Check if the Mongoose connection is successful
    if (mongoose.connection.readyState === 1) {
      console.log('Connected to MongoDB Atlas');
      res.status(200).json({ message: 'Connected to MongoDB Atlas' });
    } else {
      console.error('Failed to connect to MongoDB Atlas');
      res.status(500).json({ message: 'Failed to connect to MongoDB Atlas' });
    }

    // Close the Mongoose connection
    mongoose.disconnect();
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas:', error);
    res.status(500).json({ message: 'Failed to connect to MongoDB Atlas' });
  }
};

