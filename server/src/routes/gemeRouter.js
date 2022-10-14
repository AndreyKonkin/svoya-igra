const express = require('express');
const { Theme, Question } = require('../../db/models');

const router = express.Router();

router.route('/')
  .post(async (req, res) => {
    const allCafe = await Theme.findAll({ include: Question });
    res.json(allCafe);
  });

module.exports = router;
