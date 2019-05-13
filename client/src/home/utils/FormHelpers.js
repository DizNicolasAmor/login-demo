import { getFromStorage } from './storage';

export const submitLogout = () => {
	const tokenItem = getFromStorage('sessionId');
	if (tokenItem && tokenItem.token) {
		const { token } = tokenItem;
		const url = `/api/logout?token=${token}`;

		fetch(url)
			.then(res => res.json())
			.then(console.warn)
			.catch(console.error);
	}
};
