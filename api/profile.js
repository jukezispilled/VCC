import requireRole from '../middleware/requireRole.js';

export default requireRole('general', (req, res) => {
  // Handle general user profile logic here
  res.json({ message: 'General user profile' });
});
