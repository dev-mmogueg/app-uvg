'use strict'

/* ----- IMPORT'S ----- */
const jwt = require('jsonwebtoken');

/* --- CREATE TOKEN --- */
exports.create_token = async (user = {}) => {
  try {
    const payload = {
      sub: user._id,
      username: user.profile.username,
      email: user.profile.email,
      role: user.profile.role,
      iat: Date.now(),
      exp: Math.floor(Date.now() + ((1000 * 60) * 120)) // 2hr
    }
    return jwt.sign(payload, `${process.env.KEY_DECODE}`);
  } catch (err) {
    console.error(err);
    return err;
  }
}