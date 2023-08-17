const User = require('../models/User');

exports.registerUser = (req, res) => {
  const { name, dateOfBirth } = req.body;
  console.log(req.body);
  // Validation: Check if required fields are present
  if (!name ||!dateOfBirth) {
    return res.status(400).json({ error: 'Name and Date of Birth are required' });
  }
  const _name = /^[A-Z a-z]{2,30}$/;
  if (!_name.test(name)) {
    return res.status(400).json({ error: 'Name must be between 2 and 30 characters long' });
  }
  if (typeof (dateOfBirth) != typeof(Date())) {
  return res.status(400).json({ error: 'Date of Birth must be a valid date' });
  }else{if(dateOfBirth >= Date(today.getFullYear()-12, today.getMonth, today.getDate())){
    return res.status(400).json({ error: 'User must be 12 years old or older ' });
  }
    // Create a new user
    const newUser = new User();
    newUser.name = name;
    newUser.dateOfBirth = dateOfBirth;
  }
  newUser.save(err, savedUser);
};

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
