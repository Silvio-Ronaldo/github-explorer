import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
	return (
		<>
			<img src={logo} alt="Logo Github Explorer" />
			<Title>Explore repositórios no Github</Title>

			<Form>
				<input type="text" placeholder="Digite o nome do repositório" />
				<button type="submit">Pesquisar</button>
			</Form>

			<Repositories>
				<a href="teste">
					<img
						src="https://avatars.githubusercontent.com/u/48893927?s=460&u=5a414a7b65386954ac45e948d653258d980cc7dd&v=4"
						alt="Silvio Ronaldo"
					/>

					<div>
						<strong>Silvio-Ronaldo/StudiHub-Web</strong>
						<p>
							Site do StudiHub, projeto de educação para auxiliar
							estudantes universitários.
						</p>
					</div>

					<FiChevronRight size={20} />
				</a>
			</Repositories>
		</>
	);
};

export default Dashboard;
