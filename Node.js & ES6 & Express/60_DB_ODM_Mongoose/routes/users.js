const express = require('express');
const User = require('../schemas/user');
const Comment = require('../schemas/comment');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const users = await User.find({});  //SelectAll
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const user = await User.create({  //Insert
        name: req.body.name,
        age: req.body.age,
        married: req.body.married,
      });
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.get('/:id/comments', async (req, res, next) => {
  try {
    //댓글을 쓴 사용자의 아이디로 댓글을 조회한 뒤 polplate 메서드로 관련있는 컬렉션의 다큐먼트를 불러온다.
    const comments = await Comment.find({ commenter: req.params.id })
      .populate('commenter'); //Comment 스키마의 commenter 필드의 ref가 User로 되어있으므로 알아서 users 컬렉션의 다큐먼트를 합쳐서 반환한다.
      //commenter 필드는 ObjectId가 아니라 해당 id를 가진 user 다큐먼트이다.
    console.log(comments);
    res.json(comments);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
