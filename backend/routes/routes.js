const express = require('express');
const routes = express.Router();
const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');

mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost:27017/login',
	{ useNewUrlParser: true },
	err => {
		if (err) console.error('MONGO ERROR', err);
	}
);

routes.use('/', signup);
routes.use('/', login);
routes.use('/', logout);

module.exports = routes;
