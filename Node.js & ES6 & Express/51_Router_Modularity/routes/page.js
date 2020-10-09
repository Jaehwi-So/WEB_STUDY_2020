const express = require('express');

//Router 객체
const router = express.Router();

// GET /test 라우터
router.get('/', (req, res) => {
    res.send('Hello Test');
  });

// GET /test/page 라우터
router.get('/page', (req, res) => {
  res.send('Hello Page');
});
 
module.exports = router; 
