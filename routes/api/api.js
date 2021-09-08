const express = require('express')
const app = express();
const homelessfromRouter = require('./homelessformRoute')


app.use("/homelessfrom", homelessfromRouter)

module.exports = app;
