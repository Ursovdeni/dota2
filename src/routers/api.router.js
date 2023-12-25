const apiRouter = require('express').Router();
const movieRouter = require('./movie.router');
const userRouter = require('./user.router');

apiRouter.use('/news', movieRouter);
apiRouter.use('/users', userRouter);

module.exports = apiRouter;
