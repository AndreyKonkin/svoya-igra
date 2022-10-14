const express = require('express');
const { Cafe } = require('../db/models');

const router = express.Router();

router.route('/')
  .post(async (req, res) => {
    const allCafe = await Cafe.findAll();
    res.json(allCafe);
  });

module.exports = router;
