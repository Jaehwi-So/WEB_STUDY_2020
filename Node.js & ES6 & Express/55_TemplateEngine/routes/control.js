const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const fruit = ['사과', '배', '오렌지', '포도'];
  res.render('ex3', { fruit_list: fruit, render_color: 'red' });
});

module.exports = router;
