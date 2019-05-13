import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field, ErrorMessage } from 'formik';
import Loader from './Loader';
import PostSubmit from './PostSubmit';
import { inputs } from '../utils/FormHelpers';
import { Title } from '../../styles/commons';
import { ButtonWrapper, Button, FormWrapper, InputWrapper, Options } from '../../styles/form';

const SignupForm = ({ isSubmitting, messageFromServer, setMessageFromServer }) => (
	<FormWrapper>
		{isSubmitting && <Loader />}
		{!!messageFromServer && (
			<PostSubmit
				messageFromServer={messageFromServer}
				setMessageFromServer={setMessageFromServer}
			/>
		)}
		<Title>Signup</Title>
		<Form>
			{inputs.map(input => (
				<InputWrapper key={input.name}>
					{input.name !== 'consent' ? (
						<div>
							<div className={`input title ${input.name}`}>{input.title}</div>
							<Field
								type={input.type}
								name={input.name}
								className="input body"
								placeholder={input.placeholder}
							/>
							<ErrorMessage name={input.name} component="div" className="input error" />
						</div>
					) : (
						<div>
							<label htmlFor={input.name} className={`input title ${input.name}`}>
								<Field id={input.name} type={input.type} name={input.name} />
								<span>
									{input.title}
									<a>Terms and conditions</a>
								</span>
							</label>
							<ErrorMessage name={input.name} component="div" className="input error" />
						</div>
					)}
				</InputWrapper>
			))}
			<ButtonWrapper>
				<Button type="submit" disabled={isSubmitting}>
					SIGN UP
				</Button>
			</ButtonWrapper>
		</Form>

		<Options>
			<div>Already an user?</div>
			<a href="/login">Log in</a>
		</Options>
	</FormWrapper>
);

SignupForm.propTypes = {
	isSubmitting: PropTypes.bool.isRequired,
	messageFromServer: PropTypes.string.isRequired,
	setMessageFromServer: PropTypes.func.isRequired
};

export default SignupForm;
