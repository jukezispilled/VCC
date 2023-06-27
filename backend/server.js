import express from 'express';
import { json } from 'express';
import { connect } from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();
const port = 3001;

const connectionString = process.env.CONN_STRING

// Connect to MongoDB Atlas
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Start the server after successfully connecting to the database
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB Atlas:', error);
  });

// Enable CORS
app.use(cors());

// Middleware
app.use(json());

// Routes
app.use('/users', userRoutes);
