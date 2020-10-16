const express = require('express');
const User = require('../models/user');
const Comment = require('../models/comment');
const { sequelize } = require('../../57_DB_ORM_Sequelize/models');

const router = express.Router();


router.route('/')
  // GET /users, 유저 목록 전체 조회, SelectAll
  .get(async (req, res, next) => {
    try {
      const users = await User.findAll(); //SelectAll
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  // POST /users + body, 유저 추가하기, Insert
  .post(async (req, res, next) => {
    try {
      const user = await User.create({  //Insert, 매개변수는 클래스 형태
        name: req.body.name,
        age: req.body.age,
        married: req.body.married,
      });
      console.log(user);
      res.status(201).json(user); //성공 HTTP 상태와 함께 json을 보낸다.
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

// GET /users/id/comments, 해당 ID에 해당하는 comment 조회
router.get('/:id/comments', async (req, res, next) => { // :id는 와일드카드. req.params.id를 통해 가져올수있다.
  try {
    const comments = await Comment.findAll({
      include: {  //include 옵션에서 
        model: User,
        where: { id: req.params.id },
      },
    });
    console.log(comments);
    //console.log('log!!!', comments[0].comment, comments[0].User.age);
    res.json(comments);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
