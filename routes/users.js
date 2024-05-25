const usersRouter = require('express').Router();

const { findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  hashPassword,
  checkAuth } = require('../middlewares');

const { sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
  sendMe } = require('../controllers');


usersRouter.get('/users', findAllUsers, sendAllUsers);

usersRouter.post(
  "/users",
  findAllUsers,
  checkEmptyNameAndEmailAndPassword,
  checkIsUserExists,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);

usersRouter.get("/users/:id", findUserById, sendUserById);

usersRouter.put("/users/:id",
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  updateUser,
  sendUserUpdated);

usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;