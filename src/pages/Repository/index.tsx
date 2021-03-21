import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import logo from '../../assets/logo.svg';

interface RepositoryParams {
	repository: string;
}

const Repository: React.FC = () => {
	const { params } = useRouteMatch<RepositoryParams>();

	return (
		<>
			<Header>
				<img src={logo} alt="Logo Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Header>

			<RepositoryInfo>
				<header>
					<img
						src="https://avatars.githubusercontent.com/u/48893927?s=460&u=5a414a7b65386954ac45e948d653258d980cc7dd&v=4"
						alt="Silvio Ronaldo"
					/>
					<div>
						<strong>Silvio-Ronaldo/StudiHub-Web</strong>
						<p>descrição do repositório</p>
					</div>
				</header>

				<ul>
					<li>
						<strong>1877</strong>
						<span>Stars</span>
					</li>
					<li>
						<strong>120</strong>
						<span>Forks</span>
					</li>
					<li>
						<strong>90</strong>
						<span>Issues abertas</span>
					</li>
				</ul>
			</RepositoryInfo>

			<Issues>
				<Link to="asasasa">
					<div>
						<strong>asdksdisdjsidj</strong>
						<p>uma desfricjjsdjsdjksjdksd</p>
					</div>

					<FiChevronRight size={20} />
				</Link>
			</Issues>
		</>
	);
};

export default Repository;
