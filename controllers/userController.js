const User = require('../models/User');

exports.registerUser = (req, res) => {
  const { name, dateOfBirth } = req.body;

  // Validation: Check if required fields are present
  if (!name || !dateOfBirth) {
    return res.status(400).json({ error: 'Name and Date of Birth are required' });
  }

  // Create a new user
  const newUser = new User({
    name,
    dateOfBirth,
  });

  newUser.save((err, savedUser) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to register user' });
    }
    return res.status(201).json(savedUser);
  });
};
