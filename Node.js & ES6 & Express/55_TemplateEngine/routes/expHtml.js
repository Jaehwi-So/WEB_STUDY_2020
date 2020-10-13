const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  res.render('ex1', { title: 'Express' });
});

router.get('/block', (req, res) => {
  res.render('ex4', { title: 'Express' });
});


module.exports = router;
