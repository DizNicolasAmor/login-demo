import * as Yup from 'yup';

const getValidationSchema = values =>
	Yup.object().shape({
		email: Yup.string()
			.email('Invalid email')
			.required('Required'),
		password: Yup.string()
			.min(6, 'Password is too short')
			.max(21, 'Password is too large')
			.required('Required'),
		passwordConfirmation: Yup.string()
			.oneOf([values.password], 'Passwords are not the same!')
			.required('Required'),
		consent: Yup.bool()
			.test('consent', 'You have to agree with our Terms and Conditions', value => value === true)
			.required('You have to agree with our Terms and Conditions')
	});

const getErrorsFromValidationError = validationError =>
	validationError.inner.reduce((errors, error) => {
		return {
			...errors,
			[error.path]: error.errors[0]
		};
	}, {});

export const validateSignup = values => {
	const validationSchema = getValidationSchema(values);
	try {
		validationSchema.validateSync(values, { abortEarly: false });
		return {};
	} catch (error) {
		return getErrorsFromValidationError(error);
	}
};
