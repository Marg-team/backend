const {check, validationResult} = require('express-validator');

exports.validateHomelessfrom = [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Name can not be empty!')
    .bail()
    .isAlpha()
    .withMessage("Name should have only alphabets")
    .bail()
    .isLength({min: 3})
    .withMessage('Minimum 3 characters required!')
    .bail(),
  check('him_homeless')
    .trim()
    .not()
    .isEmpty()
    .withMessage('him_homeless can not be empty')
    .bail()
    .isBoolean()
    .withMessage('him_homless must be boolean')
    .bail(),
  check('contact')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Contact can not be empty')
    .bail()
    .isString()
    .isMobilePhone()
    .withMessage('Contact should be string and phone no in it')
    .bail(),
  check('proof')
    .escape()
    .custom((value, {req}) => {
        var extension = (path.extname(filename)).toLowerCase();
        switch (extension) {
            case '.jpg':
                return '.jpg';
            case '.jpeg':
                return '.jpeg';
            case  '.png':
                return '.png';
            default:
                return false;
        }
    })
    .bail(),
  check('coordinate')
    .optional()
    .isObject()
    .withMessage('coordinate must be a object')
    .bail()
    .isLatLong()
    .withMessage('Coordinate does not have lat lon fied')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];