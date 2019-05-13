import React, { useState } from 'react';
import { Formik } from 'formik';
import SignupForm from './components/SignupForm';
import { initialValues, submitSignup } from './utils/FormHelpers';
import { validateSignup } from './utils/validateSignup';
import { GlobalStyle } from '../styles/commons';

const Signup = () => {
	const [messageFromServer, setMessageFromServer] = useState('');

	return (
		<div>
			<GlobalStyle />
			<Formik
				initialValues={initialValues}
				validate={validateSignup}
				onSubmit={(values, { setSubmitting }) =>
					submitSignup(values, { setSubmitting }, setMessageFromServer)
				}
				render={({ isSubmitting }) => (
					<SignupForm
						isSubmitting={isSubmitting}
						messageFromServer={messageFromServer}
						setMessageFromServer={setMessageFromServer}
					/>
				)}
			/>
		</div>
	);
};

export default Signup;
