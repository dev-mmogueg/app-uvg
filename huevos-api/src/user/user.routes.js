'use strict'

/* ----- IMPORTS'S ----- */
const api = require('express').Router();
const userController = require('./user.controller');
const { ensureAdvance } = require('../services/authenticated');
const { uploads } = require('../utils/validate');

/* ----- ROUTES PRIVATE ----- */
// --- @admin --- //
api.get('/get-all', [ensureAdvance,]);

// --- @global --- //
api.get('/test', [ensureAdvance], userController.test_);
api.get('/get-one/there*', [ensureAdvance],);
api.get('/get-photo/there*', [uploads], userController.get_file);
api.put('/upload-file/there*', [ensureAdvance, uploads], userController.upload);

/* ----- ROUTES PUBLIC ----- */
api.post('/login', userController.login);
api.post('/register', userController.register);

module.exports = api;