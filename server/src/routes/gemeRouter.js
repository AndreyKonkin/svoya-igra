const express = require('express');
const { where } = require('sequelize');
const { Theme, Question } = require('../../db/models');

const router = express.Router();

router.route('/')
  .post(async (req, res) => {
    const allCafe = await Theme.findAll({ include: Question });
    res.json(allCafe);
  });
router.route('/check/:id')
  .post(async (req, res) => {
    const { id } = req.params;
    const { input } = req.body;
    const { answer } = input;
    const que = await Question.findByPk(id);
    const que2 = JSON.parse(JSON.stringify(que));

    if (answer === que2.answer) {
      return res.json({ [id]: true });
    }
    return res.json({ [id]: false });
  });

module.exports = router;
