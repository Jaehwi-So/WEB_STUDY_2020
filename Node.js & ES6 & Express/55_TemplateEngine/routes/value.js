const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('ex2', { render_var: 'Rendering Value' });
});

module.exports = router;
