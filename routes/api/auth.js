const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const volunteerModel = require('../../models/volunteerModel');
const ngoModel = require('../../models/ngoModel');
const UserModel = require('../../models/userModel');
const router = express.Router();



router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req, res, next) => {

    const data = req.body;

    let volunteerData;
    let ngoData;

    if(!!data.pan){
      //volunteer
      volunteerData = await volunteerModel.create(data)
      
    }else if(!!data.reg){
      //ngo
      ngoData = await ngoModel.create(data)
    }

    const user = await UserModel.create({ 
      email: data.email, 
      password: data.password,
      volunteerRef: volunteerData&&volunteerData._id,
      ngoRef: ngoData&&ngoData._id
    });


    const body = { _id: user._id, email: user.email };
    const token = jwt.sign({ user: body }, 'TOP_SECRET');

    res.json({
      message: 'Signup successful',
      user: user,
      token: token,

    });

  }
);

router.post(
    '/login',
    async (req, res, next) => {
      passport.authenticate(
        'login',
        async (err, user, info) => {
          try {
            if (err || !user) {
              return res.status(200).json({
                message: info.message
              })
            }
  
            req.login(
              user,
              { session: false },
              async (error) => {
                if (error) return next(error);
  
                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, 'TOP_SECRET');
  
                return res.json({ token });
              }
            );
          } catch (error) {
            return next(error);
          }
        }
      )(req, res, next);
    }
  );
  

module.exports = router;