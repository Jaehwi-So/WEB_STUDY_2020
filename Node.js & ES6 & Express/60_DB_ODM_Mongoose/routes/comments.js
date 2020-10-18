const express = require('express');
const Comment = require('../schemas/comment');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const comment = await Comment.create({  //댓글 Insert
      commenter: req.body.id,
      comment: req.body.comment,
    });
    console.log(comment);
    //프로미스로 반환된 comment 객체에 다른 컬렉션 다큐먼트를 불러온다. path 옵션으로 어떤 필드를 합칠지 설정한다.
    const result = await Comment.populate(comment, { path: 'commenter' });  //commenter 필드의 ref는 User
    console.log('res', result)
    //Comment 스키마에 commenter에 user 스키마가 담겨있다.
    /*
    res {
    _id: 5f8c6b521dbabd49502c87eb,
    commenter: {
      _id: 5f8b55205e58e452ba001549,
      name: 'sjh',
      age: 24,
      married: false,
      comment: '필드를 바꿉니다',
      createdAt: 2020-10-17T20:33:36.091Z
    },
    comment: 'gdgdgdgd',
    createdAt: 2020-10-18T16:20:34.544Z,
    __v: 0
    }
    */
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.route('/:id')
  //댓글 수정
  .patch(async (req, res, next) => {
    try {
      const result = await Comment.update({
        _id: req.params.id,
      }, {
        comment: req.body.comment,
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  //댓글 삭제
  .delete(async (req, res, next) => {
    try {
      const result = await Comment.remove({ _id: req.params.id });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
