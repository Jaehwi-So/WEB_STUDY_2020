const express = require('express');
const { User, Comment } = require('../models');

const router = express.Router();

//댓글 생성
router.post('/', async (req, res, next) => {
  try {
    const comment = await Comment.create({  //댓글 추가 쿼리
      commenter: req.body.id,
      comment: req.body.comment,
    });
    console.log(comment);
    res.status(201).json(comment);  //성공 HTTP와 함께 comment를 json으로 Ajax 콜백에 보냄
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//댓글 수정
router.route('/:id')
  .patch(async (req, res, next) => {
    try {
      const result = await Comment.update({
        comment: req.body.comment,
      }, {
        where: { id: req.params.id },
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const result = await Comment.destroy({ where: { id: req.params.id } });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
