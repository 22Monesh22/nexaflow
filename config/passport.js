const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');
const User = require('../models/User'); // Correct the path to your User model
const { JWT_SECRET } = require('./config'); // Correct the path to your config file

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
