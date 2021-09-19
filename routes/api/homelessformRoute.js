const express = require('express');
const router = express.Router();
const homelessformController = require('../../controller/homelessFormController')
const { validateHomelessfrom} = require('../../middleware/validator/homelessFormValidator');
  

router.route('/').post(homelessformController.submitForm);
router.route('/').get(homelessformController.getAllForm);
router.route('/:id').get(homelessformController.getForm);

module.exports = router;