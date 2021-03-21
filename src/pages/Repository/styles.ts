import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #a8a8b7;
		transition: color 0.2s;

		&:hover {
			color: #666;
		}

		svg {
			margin-right: 4px;
		}
	}
`;

export const RepositoryInfo = styled.section`
	margin-top: 60px;

	header {
		display: flex;
		align-items: center;

		img {
			width: 120px;
			height: 120px;
			border-radius: 50%;
		}

		div {
			margin-left: 24px;

			strong {
				font-size: 36px;
				color: #3d3d4d;
			}

			p {
				font-size: 18px;
				color: #737380;
				margin-top: 4px;
			}
		}
	}

	ul {
		display: flex;
		list-style: none;
		margin-top: 40px;

		li {
			& + li {
				margin-left: 80px;
			}

			strong {
				display: block;
				font-size: 36px;
				color: #3d3d4d;
			}

			span {
				display: block;
				margin-top: 4px;
				color: #6c6c80;
			}
		}
	}
`;

export const Issues = styled.div`
	margin-top: 60px;

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
