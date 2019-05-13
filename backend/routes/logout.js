const express = require('express');
const UserSession = require('../models/UserSession');
const logout = express.Router();

logout.get('/api/logout', (req, res) => {
	const sendResponse = (success, message) => {
		res.send({
			success,
			message
		});
	};
	const { query: data } = req;
	if (!(data && data.token)) return sendResponse(false, 'Logout error: wrong data sended.');
	const { token } = data;

	UserSession.findOneAndUpdate(
		{
			_id: token,
			isDeleted: false
		},
		{
			$set: {
				isDeleted: true
			}
		},
		null,
		(err, sessions) => {
			if (err) return sendResponse(false, 'Server error when loging out');
			return sendResponse(true, 'Good');
		}
	);
});

module.exports = logout;
