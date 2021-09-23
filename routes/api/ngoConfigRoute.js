const express = require('express');
const router = express.Router();
const passport = require('passport');
const ngoConfigController = require('../../controller/ngoConfigController')

router.route('/active/:id').post(passport.authenticate('jwt', { session: false }), ngoConfigController.activeNgo);
router.route('/deactive/:id').post(passport.authenticate('jwt', { session: false }), ngoConfigController.deactiveNgo);
router.route('/deactive').get(passport.authenticate('jwt', { session: false }), ngoConfigController.allPendingNgo);
router.route('/activated').get(passport.authenticate('jwt', { session: false }), ngoConfigController.allActivatedNgo);

module.exports = router;