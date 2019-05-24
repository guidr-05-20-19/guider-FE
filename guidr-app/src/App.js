import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import PrivateRoute from './components/PrivateRoute';
import TripsList from './components/TripsList';
import TripForm from './components/TripForm';
import Trip from './components/Trip';

function App() {
	return (
		<Router>
			<div className="App">
				<div className = "nav">
					<div><Link to="/protected">Your Guidr</Link></div>
					<div><Link to="/login">Log In</Link></div>
				</div>
				
				<Route path="/Login" component={Login} />
				<Route
					exact
					path="/reg"
					component={Registration}
				/>
				<PrivateRoute
					exact
					path="/protected"
					component={TripsList}
				/>
				<PrivateRoute
					exact
					path="/newtrip"
					component={TripForm}
				/>
				<PrivateRoute
					path= "/protected/trips/:id"
					component={Trip}
				/>

				
				


				
				
			</div>
		</Router>
	);
}

export default App;





