const express = require('express');
const router = express.Router();
const anonymousReportController = require('../../controller/anonymousReportController');


router.route('/').post(anonymousReportController.submitForm);
router.route('/').get(anonymousReportController.getAllForm);
router.route('/:id').get(anonymousReportController.getForm);

module.exports = router;