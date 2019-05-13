const express = require('express');
const User = require('../models/User');
const signup = express.Router();

signup.post('/api/users', (req, res) => {
	const {
		body: { email, password }
	} = req;

	if (!email || !password) {
		return res.send({
			success: false,
			message: 'Error in sending data from form.'
		});
	}

	User.find({ email }, (err, previousUsers) => {
		if (err) {
			return res.send({
				success: false,
				message: 'Error in server.'
			});
		} else if (previousUsers.length > 0) {
			return res.send({
				success: false,
				message: 'Account already exist.'
			});
		}

		const newUser = new User();
		newUser.email = email;
		newUser.password = password;
		newUser.save((err, user) => {
			if (err) {
				return res.send({
					success: false,
					message: 'Server error when saving user.'
				});
			}
			return res.send({
				success: true,
				message: 'User added successfully.'
			});
		});
	});
});

module.exports = signup;
