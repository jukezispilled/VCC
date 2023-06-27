// middleware/requireRole.js

import { verify } from 'jsonwebtoken';
const secretKey = 'your-secret-key';

// Middleware for role-based access control
function requireRole(role) {
  return (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({ message: 'No token provided' });
      return;
    }

    // Verify the JWT
    verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'Invalid token' });
        return;
      }

      // Check if the user has the required role
      if (decoded.role !== role) {
        res.status(403).json({ message: 'Access forbidden' });
        return;
      }

      // User is authorized, proceed to the next middleware
      next();
    });
  };
}

export default requireRole;
