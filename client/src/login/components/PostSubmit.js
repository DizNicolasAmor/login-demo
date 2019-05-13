import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostSubmitContainer = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;

	.backdrop {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #fff;
		z-index: 3;
	}

	.post-submit-body {
		z-index: 9;
	}
	.message {
		font-size: 14px;
		text-align: center;
		color: #333;
		letter-spacing: 0.05em;
		margin: 3px auto;
	}
	.center-flex {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	button {
		font-family: "'Helvetica', 'Arial', sans-serif";
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.05em;
		color: #333;
		background: LightGrey;
		border: 1px solid #878f99;
		margin: 12px;
		padding: 6px 12px;
		border-radius: 3px;
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
	}
`;

const PostSubmit = ({ messageFromServer, setMessageFromServer }) => (
	<PostSubmitContainer>
		<div className="backdrop" />
		<div className="post-submit-body">
			{messageFromServer && (
				<div>
					<div className="message">Login failed.</div>
					<div className="message">{messageFromServer}</div>

					<div className="center-flex">
						<button
							onClick={() => {
								setMessageFromServer('');
							}}
						>
							BACK
						</button>
					</div>
				</div>
			)}
		</div>
	</PostSubmitContainer>
);

PostSubmit.propTypes = {
	messageFromServer: PropTypes.string.isRequired,
	setMessageFromServer: PropTypes.func.isRequired
};

export default PostSubmit;
