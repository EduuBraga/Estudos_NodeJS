const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRouter.js');
const adminRouter = require('./routes/adminRouter.js');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/user', userRouter);
app.use('/admin', adminRouter);

module.exports = app;