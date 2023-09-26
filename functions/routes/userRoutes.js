import { Router } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import requireRole from '../../middleware/requireRole.js';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import multer from 'multer';

const router = Router();
const secretKey = process.env.SECRET_KEY;
const emailPass = process.env.EMAIL_PASS

const storage = multer.memoryStorage();
const upload = multer({ storage });

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

router.post('/contact', async (req, res) => {
  try{
    const { name, email, subject, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jax46500@gmail.com',
        pass: 'uqdjdatfyjqzkaoo',
      },
    });    

    // Define the email content
    const mailOptions = {
      from: 'Vector Contact',
      to: 'jax46500@gmail.com',
      subject: 'Contact Form',
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Subject: ${subject}</p>
        <p>Message: ${message}</p>
        `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

router.post('/apply', upload.single('resume'), async (req, res) => {
  try {
    const { name, phone, address, email, workExperience } = req.body;
    const resume = req.file;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jax46500@gmail.com',
        pass: 'uqdjdatfyjqzkaoo',
      },
    });    

    // Define the email content
    const mailOptions = {
      from: 'Vector Apply',
      to: 'jax46500@gmail.com',
      subject: 'New Employment Form Submission',
      html: `
        <p>Name: ${name}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <p>Email: ${email}</p>
        <p>Work Experience: ${workExperience}</p>
      `,
      attachments: [
        {
          filename: resume.originalname,
          content: resume.buffer,
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

// User login endpoint
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Get the MongoDB collection directly
    const collection = mongoose.connection.db.collection('users');

    // Find the user by email
    const user = await collection.findOne({ email });

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
});

// Admin-only route
router.get('/admin/dashboard', requireRole('admin'), (req, res) => {
  // Handle admin dashboard logic here
  res.json({ message: 'Admin dashboard' });
});

// General user route
router.get('/profile', requireRole('general'), (req, res) => {
  // Handle general user profile logic here
  res.json({ message: 'General user profile' });
});

export default router;
/*import { Router } from 'express';
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
const { sign } = jwt;
import User from '../models/User.js';
import requireRole from '../middleware/requireRole.js';
import mongoose from 'mongoose';

const router = Router();
const secretKey = 'your-secret-key';

// Generate JWT
function generateJWT(user) {
  const payload = {
    userId: user._id,
    role: user.role,
  };

  const options = {
    expiresIn: '1h',
  };

  return sign(payload, secretKey, options);
}

// User registration endpoint
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Failed to register user:', error);
    res.status(500).json({ message: 'Failed to register user' });
  }
});

// User login endpoint
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Get the MongoDB collection directly
    const collection = mongoose.connection.db.collection('users');

    // Find the user by email
    const user = await collection.findOne({ email });

    // If user not found, return error
    if (!user) {
      console.error('User not found');
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Check if the password matches
    const passwordMatches = await compare(password, user.password);

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
});

// Admin-only route
router.get('/admin/dashboard', requireRole('admin'), (req, res) => {
  // Handle admin dashboard logic here
  res.json({ message: 'Admin dashboard' });
});

// General user route
router.get('/profile', requireRole('general'), (req, res) => {
  // Handle general user profile logic here
  res.json({ message: 'General user profile' });
});

export default router;*/
