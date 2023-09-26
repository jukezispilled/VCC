import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const secretKey = process.env.SECRET_KEY;
const CONN_STRING = process.env.MONGODB_URI; // Replace with your MongoDB Atlas connection string

// Connect to MongoDB Atlas
mongoose.connect(CONN_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB Atlas:', error);
  });

// Generate JWT
function generateJWT(user) {
  const payload = {
    userId: user._id,
    role: user.role,
  };

  const options = {
    expiresIn: '1h',
  };

  return jwt.sign(payload, secretKey, options);
}

export default async (req, res) => {
  const { email, password } = req.body;

  try {
    // Use the User model defined in your application
    const User = mongoose.model('User');

    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found, return error
    if (!user) {
      console.error('User not found');
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Check if the password matches
    const passwordMatches = user.password === password;

    // If password doesn't match, return error
    if (!passwordMatches) {
      console.error('Wrong password');
      res.status(401).json({ message: 'Wrong password' });
      return;
    }

    // Generate and send the JWT
    const token = generateJWT(user);
    res.status(200).json({ token });
  } catch (error) {
    console.error('Failed to log in:', error);
    res.status(500).json({ message: 'Failed to log in' });
  }
};
