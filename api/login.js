import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;
const CONN_STRING = process.env.MONGODB_URI; // Replace with your MongoDB Atlas connection string

// Define the User schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String, // You can specify the appropriate data type for the 'role' field
  // Other user properties...
});

// Register the 'users' model with Mongoose
const User = mongoose.model('users', UserSchema);

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
    // Connect to MongoDB Atlas using Mongoose
    await mongoose.connect(CONN_STRING);

    // Check if the user exists
    const user = await User.findOne({ email });

    // If user not found, return error
    if (!user) {
      console.error('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password matches
    const passwordMatches = user.password === password;

    // If the password doesn't match, return error
    if (!passwordMatches) {
      console.error('Wrong password');
      return res.status(401).json({ message: 'Wrong password' });
    }

    // Generate JWT token
    const token = generateJWT(user);

    // Send the token as part of the response
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Failed to log in:', error);
    return res.status(500).json({ message: 'Failed to log in' });
  } finally {
    // Close the Mongoose connection
    await mongoose.disconnect();
  }
};
