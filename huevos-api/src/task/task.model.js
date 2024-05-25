'use strict'

/* ----- IMPORT'S ----- */
const mongoose = require('mongoose');

/* --- MODEL TASk --- */
const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 200
  },
  description: {
    type: String,
  },
  notification_push: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    required: true
  },
  state: {
    type: String,
    default: 'PENDING',
    uppercase: true,
    enum: ['PENDING','ACTIVE','DONE','LAGATE']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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

module.exports = mongoose.model('Task', taskSchema);