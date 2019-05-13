import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field, ErrorMessage } from 'formik';
import Loader from './Loader';
import PostSubmit from './PostSubmit';
import { inputs } from '../utils/FormHelpers';
import { Title } from '../../styles/commons';
import { ButtonWrapper, Button, FormWrapper, InputWrapper, Options } from '../../styles/form';

const LoginForm = ({ isSubmitting, messageFromServer, setMessageFromServer }) => (
	<FormWrapper>
		{isSubmitting && <Loader />}
		{!!messageFromServer && (
			<PostSubmit
				messageFromServer={messageFromServer}
				setMessageFromServer={setMessageFromServer}
			/>
		)}
		<Title>Login</Title>
		<Form>
			{inputs.map(input => (
				<InputWrapper key={input.name}>
					<div className={`input title ${input.name}`}>{input.name}</div>
					<Field
						type={input.name}
						name={input.name}
						className="input body"
						placeholder={input.placeholder}
					/>
					<ErrorMessage name={input.name} component="div" className="input error" />
				</InputWrapper>
			))}
			<ButtonWrapper>
				<Button type="submit" disabled={isSubmitting}>
					LOG IN
				</Button>
			</ButtonWrapper>
		</Form>
		<Options>
			<button className="forgot-password">Forgot password</button>
			<div>New user?</div>
			<a href="/signup">Sign up</a>
		</Options>
	</FormWrapper>
);

LoginForm.propTypes = {
	isSubmitting: PropTypes.bool.isRequired,
	messageFromServer: PropTypes.string.isRequired,
	setMessageFromServer: PropTypes.func.isRequired
};

export default LoginForm;
