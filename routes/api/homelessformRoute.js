const express = require('express');
const router = express.Router();
const homelessformController = require('../../controller/homelessFormController')
const { validateHomelessfrom} = require('../../middleware/validator/homelessFormValidator');
  

router.route('/').post(validateHomelessfrom ,homelessformController.submitForm)

module.exports = router;