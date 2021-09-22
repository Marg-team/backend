const express = require('express');
const router = express.Router();
const homelessformController = require('../../controller/homelessFormController')
const { validateHomelessfrom} = require('../../middleware/validator/homelessFormValidator');
  

router.route('/').post(homelessformController.submitForm);
router.route('/').get(homelessformController.getAllForm);
router.route('/ngo').get(passport.authenticate('jwt', { session: false }), homelessformController.getAllFormNGO);
router.route('/volunteer').get(passport.authenticate('jwt', { session: false }), homelessformController.getAllFormVolunteer);
router.route('/:id').get(passport.authenticate('jwt', { session: false }), homelessformController.getForm);
router.route('/:id/:status').post(passport.authenticate('jwt', { session: false }), homelessformController.statusChange)

module.exports = router;