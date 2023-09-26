import jwt from 'jsonwebtoken';
import { MongoClient } from 'mongodb';

const secretKey = process.env.SECRET_KEY;
const CONN_STRING = process.env.CONN_STRING; // Replace with your MongoDB Atlas connection string

// Function to generate JWT
function generateJWT(user) {
  const payload = {
    userId: user._id,
    role: user.role,
  };

  const options = {
    expiresIn: '1h', // Set your desired expiration time
  };

  return jwt.sign(payload, secretKey, options);
}

export default async (req, res) => {
  const { email, password } = req.body;

  try {
    const client = new MongoClient(CONN_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const db = client.db(); // Get the database instance

    // Check if the user exists
    const user = await db.collection('users').findOne({ email });

    // If user not found, return error
    if (!user) {
      console.error('User not found');
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Check if the password matches
    const passwordMatches = user.password === password;

    // If the password doesn't match, return error
    if (!passwordMatches) {
      console.error('Wrong password');
      res.status(401).json({ message: 'Wrong password' });
      return;
    }

    // Generate JWT token
    const token = generateJWT(user);

    // Send the token as part of the response
    res.status(200).json({ token });

    client.close(); // Close the MongoDB connection
  } catch (error) {
    console.error('Failed to log in:', error);
    res.status(500).json({ message: 'Failed to log in' });
  }
};
