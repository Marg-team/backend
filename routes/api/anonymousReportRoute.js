const express = require('express');
const router = express.Router();
const anonymousReportController = require('../../controller/anonymousReportController');
const passport = require('passport')


router.route('/').post(anonymousReportController.submitForm);
router.route('/').get(anonymousReportController.getAllForm);
router.route('/:id').get(anonymousReportController.getForm);
router.route('/:id/:status').post(passport.authenticate('jwt', { session: false }), anonymousReportController.statusChange)

module.exports = router;