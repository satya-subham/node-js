const express = require('express');

const router = express.Router();

router.use('/login', (req, res) => {
  res.send('login page');
});

router.use('/logout', (req, res) => {
  res.send('logout page')
});

module.exports = router;