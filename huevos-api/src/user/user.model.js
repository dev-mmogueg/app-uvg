'use strict'

/* ----- IMPORT'S ----- */
const mongoose = require('mongoose');

/* --- MODEL USER --- */
const user_schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  profile: {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user_g', 'user_p'],
      lowercase: true,
    },
    photo: {
      type: String,
    }
  },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('User', user_schema);