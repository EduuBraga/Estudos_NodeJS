const express = require('express');
const userRouter = require('./routes/userRouter.js');

const app = express();
app.use('/user', userRouter);

module.exports = app;