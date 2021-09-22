const express = require('express');
const router = express.Router();
const donationController = require('../../controller/donationController');
const passport = require('passport')


router.route('/').post(donationController.submitForm);
router.route('/').get(donationController.getAllForm);
router.route('/ngo').get(passport.authenticate('jwt', { session: false }), donationController.getAllFormNGO);
router.route('/volunteer').get(passport.authenticate('jwt', { session: false }), donationController.getAllFormVolunteer);
router.route('/:id').get(passport.authenticate('jwt', { session: false }), donationController.getForm);
router.route('/:id/:status').post(passport.authenticate('jwt', { session: false }), donationController.statusChange)

module.exports = router;