const express = require('express');
const User = require('../models/User');
const UserSession = require('../models/UserSession');
const login = express.Router();

login.post('/api/login', (req, res) => {
	const {
		body: { email, password }
	} = req;

	User.find({ email }, (err, users) => {
		if (err) {
			return res.send({
				success: false,
				message: 'Server error when trying to find email.'
			});
		}
		if (users.length !== 1) {
			return res.send({
				success: false,
				message: 'Invalid email.'
			});
		}

		const currentUser = users[0];
		if (currentUser.password !== password) {
			return res.send({
				success: false,
				message: 'Invalid password.'
			});
		}

		const userSession = new UserSession();
		userSession.userId = currentUser._id;
		userSession.save((err, doc) => {
			if (err) {
				return res.send({
					success: false,
					message: 'Server error when initializing session.'
				});
			}

			return res.send({
				success: true,
				message: 'Login success',
				token: doc._id
			});
		});
	});
});

module.exports = login;
