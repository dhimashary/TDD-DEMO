const router = require('express').Router()
const User = require('../models/User')

router.post('/register', (req, res, next) => {
  // res.status(201).json({
  //   email: 'd@mail.com',
  //   _id: 1
  // })
  User
    .create({
      email: req.body.email,
      password: req.body.password
    })
    .then(user => {
      res.status(201).json({
        email: user.email,
        _id: user._id
      })
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router