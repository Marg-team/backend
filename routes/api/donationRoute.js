const express = require('express');
const router = express.Router();
const donationController = require('../../controller/donationController');


router.route('/').post(donationController.submitForm);
router.route('/').get(donationController.getAllForm);
router.route('/:id').get(donationController.getForm);

module.exports = router;