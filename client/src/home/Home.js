import React, { useState, useEffect } from 'react';
import { getFromStorage } from './utils/storage';
import { submitLogout } from './utils/FormHelpers';

const logout = () => {
	submitLogout();
	localStorage.removeItem('sessionId');
	window.location.reload();
};

const Home = () => {
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		const isSessionId = !!getFromStorage('sessionId');
		setIsLogged(isSessionId);
	}, []);

	return (
		<div>
			{!isLogged ? (
				<div>
					<div>
						Go to <a href="/signup">signup</a>
					</div>
					<div>
						Go to <a href="/login">login</a>
					</div>
				</div>
			) : (
				<div>
					<div>You are logged in.</div>
					<button
						onClick={() => {
							logout();
						}}
					>
						LOG OUT
					</button>
				</div>
			)}
		</div>
	);
};
export default Home;
