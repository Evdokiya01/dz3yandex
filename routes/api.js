const apiRouter = require("express").Router();

const categoriesRouter = require('./categories');
const gamesRouter = require('./games');
const usersRouter = require('./users');
const authRouter = require("./auth")

apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", authRouter);

module.exports = apiRouter;