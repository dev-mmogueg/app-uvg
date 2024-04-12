'use strict'

/* --- IMPORTS --- */
const mongoose = require('mongoose')

/* --- CONFIG CONNECTION MONGO --- */
exports.connect_mongo = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(`${process.env.URI_MONGO}`);
    return console.log('Connect to DB ');
  } catch (err) {
    console.error(err);
    return err;
  }
}