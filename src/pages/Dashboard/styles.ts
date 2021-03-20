import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
	font-size: 36px;
	color: grey;

	margin-top: 30px;
	max-width: 400px;
	line-height: 56px;
`;

export const Form = styled.form`
	margin-top: 25px;
	max-width: 700px;
	display: flex;

	input {
		flex: 1;
		padding: 0 24px;
		height: 70px;
		border: 0;
		border-radius: 5px 0 0 5px;
		color: #3a3a3a;

		&::placeholder {
			color: #a8a8b3;
		}
	}

	button {
		width: 210px;
		height: 70px;
		background-color: #04d361;
		border-radius: 0 5px 5px 0;
		border: 0;
		color: #fff;
		font-weight: bold;
		transition: background-color 0.2s;

		&:hover {
			background: ${shade(0.2, '#04d361')};
		}
	}
`;

export const Repositories = styled.div`
	margin-top: 60px;
	max-width: 700px;

	a {
		background-color: #fff;
		display: flex;
		text-decoration: none;
		padding: 20px;
		align-items: center;
		border-radius: 5px;
		transition: transform 0.2s;

		&:hover {
			transform: translateX(10px);
		}

		& + a {
			margin-top: 16px;
		}

		img {
			border-radius: 50%;
			width: 64px;
			height: 64px;
		}

		div {
			margin: 0 16px;
			flex: 1;

			strong {
				font-size: 20px;
				color: #3d3d4d;
			}

			p {
				font-size: 18px;
				color: #a8a8b3;
				margin-top: 4px;
			}
		}

		svg {
			margin-left: auto;
			color: #cbabd6;
		}
	}
`;
