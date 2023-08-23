const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userService = require('../services/user'); // Import your userService
const bcrypt = require('bcrypt');

// Middleware to check if the user is authenticated
const requireUserLogin = (pathToRedirect = '/login') => (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect(`${pathToRedirect}?pathToRedirect=${req.originalUrl}`);
    }
    next();
};

// User routes
router.post('/', async (req, res) => {
  const { username, password, firstName, lastName, userTaz } = req.body;

  try {
    // Check if the username is already taken
    const existingUser = await userService.getUser(username);
    if (existingUser) {
      req.flash('error', 'Username already taken.');
      return res.redirect('/register'); // Change this to the appropriate URL
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = await userService.createUser({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      userTaz,
    });

    req.session.userId = newUser._id; // Store user ID in session
    res.redirect('/dashboard'); // Redirect to user dashboard
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while registering');
  }
});

router.get('/', requireUserLogin(), async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching users');
  }
});

router.put('/:userId', requireUserLogin(), async (req, res) => {
  const { userId } = req.params;
  const { username, password, firstName, lastName, userTaz } = req.body;

  try {
    // Update user
    const updatedUser = await userService.updateUser(userId, {
      username,
      password,
      firstName,
      lastName,
      userTaz,
    });

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while updating user');
  }
});

router.delete('/:userId', requireUserLogin(), async (req, res) => {
  const { userId } = req.params;

  try {
    // Delete user
    const deletedUser = await userService.deleteUser(userId);

    res.json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while deleting user');
  }
});

module.exports = router;
