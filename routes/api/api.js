const express = require('express')
const app = express();
const homelessfromRouter = require('./homelessformRoute')


app.use("/homelessform", homelessfromRouter)

module.exports = app;
