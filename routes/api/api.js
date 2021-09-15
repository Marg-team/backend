const express = require('express')
const app = express();
const homelessfromRouter = require('./homelessformRoute')
const donationRouter = require('./donationRoute');


app.use("/homelessform", homelessfromRouter);
app.use('/donation', donationRouter);

module.exports = app;
