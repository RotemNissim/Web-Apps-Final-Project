const User = require('../models/Users');

exports.registerUser = (req, res) => {
  const { name, dateOfBirth } = req.body;
  console.log(req.body);
  // Validation: Check if required fields are present
  if (!name ) {
    return res.status(400).json({ error: 'Name and Date of Birth are required' });
  }
  const _name = /^[A-Z a-z]{2,30}$/;
  if (!_name.test(name)) {
    return res.status(400).json({ error: 'Name must be between 2 and 30 characters long' });
  }

  
    // Create a new user
    const newUser = new User();
    newUser._id=_id;
    newUser.username=username;
    newUser.password=password;
    newUser.firstName = firstName;
    newUser.lastName=lastName;
    newUser.userTaz=userTaz;

  }
  newUser.save(err, savedUser);
};

  // Validation: Check if required fields are present
  if (!firstName) {
    return res.status(400).json({ error: 'Name required' });
  }

  // Create a new user
  const newUser = new User({
    firstName,lastName,_id,userTaz
  });

  newUser.save((err, savedUser) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to register user' });
    }
    return res.status(201).json(savedUser);
  });
