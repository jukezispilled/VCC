import requireRole from '../middleware/requireRole.js';

export default requireRole('admin', (req, res) => {
  // Handle admin dashboard logic here
  res.json({ message: 'Admin dashboard' });
});
