'use strict'

require('dotenv').config()
require('./configs/database').connect_mongo()
require('./configs/app').init_server()