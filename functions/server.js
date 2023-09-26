import express from 'express';
import { json } from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv'; // Import dotenv here
import router from './routes/userRoutes.js';
import cors from 'cors';
import serverless from 'serverless-http';

dotenv.config(); // Load environment variables from a .env file if available

const app = express();
const port = process.env.PORT || 3000; // Define the port, with a fallback value of 3000

const connectionString = process.env.CONN_STRING;

// Wrap the MongoDB connection in an async function
async function startServer() {
  try {
    // Connect to MongoDB Atlas
    await connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB Atlas');

    // Enable CORS
    app.use(cors());

    // Middleware
    app.use(json());

    // Routes
    app.use('/users', router);

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas:', error);
  }
}

// Call the async function to start the server
startServer();

// Export the serverless handler
export const handler = serverless(app);
