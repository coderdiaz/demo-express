var express = require('express');
var router = express.Router();

const User = require('../models/user');

/* GET home page. */

router.get('/', async (req, res, next) => {
  const users = await User.find().exec();
  res.render('index', { title: 'Express', users });
});

router.get('/users', async (req, res, next) => {
  const users = await User.find().exec();
  return res.json({
    users,
  });
});

router.post('/', (req, res, next) => {
  console.log(req);
  const { body } = req;
  const user = new User(body);
  user.save();
  return res.json({
    user
  });
});

module.exports = router;
