import * as Yup from 'yup';
import { getFromStorage, setInStorage } from './storage';
export const inputs = [
	{
		name: 'email',
		placeholder: 'user@gmail.com'
	},
	{
		name: 'password',
		placeholder: '******'
	}
];

export const initialValues = {
	email: '',
	password: ''
};

export const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.required('Required'),
	password: Yup.string()
		.min(6, 'Password is too short')
		.max(21, 'Password is too large')
		.required('Required')
});

export const submitLogin = (values, { setSubmitting }, setMessageFromServer) => {
	const url = 'http://localhost:5000/api/login';
	const params = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(values)
	};

	fetch(url, params)
		.then(response => response.json())
		.then(res => {
			if (res.success) {
				setInStorage('sessionId', { token: res.token });
				window.location.href = '/';
			} else setMessageFromServer(res.message);
			setSubmitting(false);
		})
		.catch(reason => {
			console.error(reason);
			setMessageFromServer('Please try again later.');
			setSubmitting(false);
		});
};

export const submitLogout = () => {
	const tokenItem = getFromStorage('sessionId');
	if (tokenItem && tokenItem.token) {
		const { token } = tokenItem;
		const url = `/api/logout?token=${token}`;

		fetch(url)
			.then(console.warn)
			.catch(console.error);
	}
};
