import styled from 'styled-components';
import { centerFlex } from './mixins';
import { FONT, COLOR } from './variables';

export const FormWrapper = styled.div`
	position: relative;
	${centerFlex}
	flex-direction: column;
	width: 100%;
	max-width: 450px;
	margin: 6% auto;
	border: 1px solid ${COLOR.LIGHTGREY};
	border-radius: 3px;
	background: #fff;
`;

export const InputWrapper = styled.div`
	text-align: center;
	margin: 18px;
	.input {
		font-size: ${FONT.SIZE.LITTLE_TEXT};
		text-align: center;
		color: ${COLOR.BLACK};
		letter-spacing: 0.05em;
		margin: 3px auto;
		width: 200px;
		&.title {
			text-transform: uppercase;
			cursor: default;
		}
		&.body {
			font-size: ${FONT.SIZE.TEXT};
			padding: 3px 6px;
			border-radius: 3px;
		}
		&.consent {
			width: 240px;
			text-transform: initial;
			display: flex;
			align-items: center;
			justify-content: center;
			a {
				margin-left: 3px;
				cursor: pointer;
				border: none;
				background: transparent;
				color: ${COLOR.MAIN};
				text-decoration: underline;
				transition: 0.3s;
				&:hover {
					opacity: 0.8;
				}
				&:focus {
					border-color: none;
					-webkit-box-shadow: none;
					box-shadow: none;
					outline: none;
				}
			}
		}
		&.error {
			color: ${COLOR.RED};
			width: 300px;
		}
	}
	input:hover,
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus textarea:-webkit-autofill,
	textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
	select:-webkit-autofill,
	select:-webkit-autofill:hover,
	select:-webkit-autofill:focus {
		outline: none;
		-webkit-box-shadow: transparent;
		transition: background-color 5000s ease-in-out 0s;
	}
	input[type='password']::-webkit-inner-spin-button,
	input[type='password']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	*:required:focus,
	*:focus {
		border-color: none;
		-webkit-box-shadow: none;
		box-shadow: none;
		outline: none;
	}
`;

export const ButtonWrapper = styled.div`
	${centerFlex}
`;

export const Button = styled.button`
	font-family: ${FONT.FAMILY};
	font-size: ${FONT.SIZE.TITLE};
	font-weight: 500;
	letter-spacing: 0.05em;
	color: ${COLOR.BLACK};
	background: ${COLOR.LIGHTGREY};
	border: 1px solid ${COLOR.GREY};
	padding: 6px 12px;
	margin: 6px;
	border-radius: 3px;
	margin: auto;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		opacity: 0.8;
	}
	&:focus {
		border-color: none;
		-webkit-box-shadow: none;
		box-shadow: none;
		outline: none;
	}
`;

export const Options = styled.div`
	width: 240px;
	padding: 6px 12px;
	margin: 18px auto;
	box-sizing: content-box;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	font-family: ${FONT.FAMILY};
	font-size: ${FONT.SIZE.LITTLE_TEXT};
	font-weight: 500;
	letter-spacing: 0.05em;
	color: ${COLOR.BLACK};

	div {
		cursor: default;
		margin-right: 12px;
	}
	button,
	a {
		cursor: pointer;
		border: none;
		background: transparent;
		color: ${COLOR.MAIN};
		text-decoration: underline;
		transition: 0.3s;
		&:hover {
			opacity: 0.8;
		}
		&:focus {
			border-color: none;
			-webkit-box-shadow: none;
			box-shadow: none;
			outline: none;
		}
	}
	.forgot-password {
		width: 100%;
		margin: 6px auto;
	}
`;
