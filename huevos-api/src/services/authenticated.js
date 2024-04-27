'use strict'

/* ----- IMPORT'S ----- */
const jwt = require('jsonwebtoken');

/* --- MIDDLEWARE --- */
exports.ensureAdvance = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: `Doesn't contain header "AUTHORIZATIONs"` })
  } else {
    try {
      const token = req.headers.authorization.replace(/['"]+/g, '');
      const payload = jwt.decode(token, `${process.env.KEY_DECODE}`);
      if (Date.now() >= payload.exp)
        return res.status(401).send({ message: `Token Expired :/` });
      req.user = payload;
    } catch (err) {
      console.error(err);
      return res.status(418).send({ message: `Invalid Token` });
    }
  }
}