const usersRouter = require('express').Router();

const findAllUsers = require('../middlewares/users');
const sendAllUsers = require('../controllers/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);

module.exports = usersRouter;