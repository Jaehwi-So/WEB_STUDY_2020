const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll(); //SelectAll, User 객체들의 배열이 반환됨
    console.log('user1', users);  
    res.render('visit', { users }); // == res.render('visit', {users: users})
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
