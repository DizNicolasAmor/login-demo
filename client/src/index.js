import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './signup/Signup';
import Login from './login/Login';
import Home from './home/Home';
import * as serviceWorker from './serviceWorker';

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/signup" component={Signup} />
			<Route path="/login" component={Login} />
		</Switch>
	</Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
