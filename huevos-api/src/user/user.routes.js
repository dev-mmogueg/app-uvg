'use strict'

/* ----- IMPORTS'S ----- */
const api = require('express').Router();
const userController = require('./user.controller');
const { ensureAdvance } = require('../services/authenticated');
const { uploads } = require('../utils/validate');

/* ----- ROUTES PRIVATE ----- */
// --- @admin --- //

// --- @global --- //
api.get('/test', [ensureAdvance], userController.test_);

/* ----- ROUTES PUBLIC ----- */
api.post('/login', userController.login);
api.post('/register', userController.register);

module.exports = api;