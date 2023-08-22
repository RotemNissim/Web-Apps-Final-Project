const express = require('express');
const router = express.Router();
const middleware = require('./middlewares'); // Adjust the path to your middleware file

// ...

router.get('/logout', middleware.logout);

router.get('/some-protected-route', middleware.requireAdminLogin(), (req, res) => {
  // Handle your protected route logic here
});

// ...
