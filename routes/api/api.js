const express = require('express')
const app = express();
const homelessfromRouter = require('./homelessformRoute')
const donationRouter = require('./donationRoute');
const anonymousRouter = require('./anonymousReportRoute');
const authRouter = require('./auth')
const ngoConfigRouter = require('./ngoConfigRoute')
var router = express.Router();



app.use("/homelessform", homelessfromRouter);
app.use('/donation', donationRouter);
app.use('/anonymous-report', anonymousRouter)
app.use('/auth', authRouter)
app.use('/ngoConfig', ngoConfigRouter)

router.get('/', function(req, res, next) {
    res.render('index', {title: 'Aashroy API'})
});


module.exports = app;
module.exports = router;
