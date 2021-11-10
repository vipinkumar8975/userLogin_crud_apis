const express = require('express');
const router = express.Router()

const userController = require('../controllers/user.controllers');

router.post('/signup', userController.signup);

router.post('/signIn', userController.signIn);

router.get('/:id', userController.findOne);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

module.exports = router

