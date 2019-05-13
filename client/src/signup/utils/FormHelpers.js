export const inputs = [
	{
		title: 'email',
		type: 'email',
		name: 'email',
		placeholder: 'user@gmail.com'
	},
	{
		title: 'password',
		type: 'password',
		name: 'password',
		placeholder: '******'
	},
	{
		title: 'Confirm password',
		type: 'password',
		name: 'passwordConfirmation',
		placeholder: '******'
	},
	{
		title: 'I agree to the',
		name: 'consent',
		type: 'checkbox',
		placeholder: ''
	}
];

export const initialValues = {
	email: '',
	password: '',
	passwordConfirmation: '',
	consent: false
};

export const submitSignup = (values, { setSubmitting }, setMessageFromServer) => {
	const url = 'http://localhost:5000/api/users';
	const params = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email: values.email.toLowerCase(),
			password: values.password
		})
	};

	fetch(url, params)
		.then(response => response.json())
		.then(res => {
			if (res.success) setMessageFromServer('success');
			else setMessageFromServer(res.message);
			setSubmitting(false);
		})
		.catch(reason => {
			console.error(reason);
			setMessageFromServer('Please try again later.');
			setSubmitting(false);
		});
};
