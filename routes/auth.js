const authRouter = require("express").Router();
const { login } = require("../controllers");
const { findAllUsers,
    createUser,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    hashPassword } = require('../middlewares');

const { sendUserCreated } = require('../controllers');


authRouter.post("/auth/login", login);

authRouter.post(
    "/registration",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    hashPassword,
    createUser,
    login,
    sendUserCreated
);

module.exports = authRouter;