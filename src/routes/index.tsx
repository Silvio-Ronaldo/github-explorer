import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route
					path="/repositories/:repository+"
					component={Repository}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default routes;
