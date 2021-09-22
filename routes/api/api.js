const express = require('express')
const app = express();
const homelessfromRouter = require('./homelessformRoute')
const donationRouter = require('./donationRoute');
const anonymousRouter = require('./anonymousReportRoute');
const authRouter = require('./auth')



app.use("/homelessform", homelessfromRouter);
app.use('/donation', donationRouter);
app.use('/anonymous-report', anonymousRouter)
app.use('/auth', authRouter)


module.exports = app;
