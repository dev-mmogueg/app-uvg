'use strict'

/* ---- IMPORT MODULES ---- */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 3000 || 3001;

/* ---- CONFIG SERVER ---- */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

/* ---- IMPORT ROUTES ---- */
// PRODUCTION

// DEVELOP

/* ---- DEPLOYED SERVER ---- */
exports.init_server = () => {
  app.listen(port)
  console.log(`Server HTTP running in port ${port}`);
}