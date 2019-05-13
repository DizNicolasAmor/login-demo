import React, { useState } from 'react';
import { Formik } from 'formik';
import LoginForm from './components/LoginForm';
import { initialValues, validationSchema, submitLogin } from './utils/FormHelpers';
import { GlobalStyle } from '../styles/commons';

const Login = () => {
	const [messageFromServer, setMessageFromServer] = useState('');

	return (
		<div>
			<GlobalStyle />
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) =>
					submitLogin(values, { setSubmitting }, setMessageFromServer)
				}
				render={({ isSubmitting }) => (
					<LoginForm
						isSubmitting={isSubmitting}
						messageFromServer={messageFromServer}
						setMessageFromServer={setMessageFromServer}
					/>
				)}
			/>
		</div>
	);
};

export default Login;
