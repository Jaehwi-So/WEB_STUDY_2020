const express = require('express');

//Router 객체
const router = express.Router();

// GET /user 라우터
router.get('/', (req, res) => {
  res.send('Hello, User');
});

// POST /user 라우터
router.get('/', (req, res) => {
  res.send('Hello, User');
});

module.exports = router;
