import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import PrivateRoute from './components/privateRoute';
import TripsList from './components/TripsList';
import Trip from './components/Trip';

function App() {
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to="/reg">Register</Link>
						<Link to="/login">Login</Link>
					</li>
				</ul>
				<Route exact path="/login" component={Login} />
				<Route
					exact
					path="/reg"
					component={Registration}
				/>

				<PrivateRoute
					 exact path="/protected"
					component={TripsList}
				/>

				<PrivateRoute
					 path="/protected/:id"
					component={Trip}
				/>



				{/* might need to add a trips container that contains tripslist, routes, trips etc to get Private routing to work properly with param props */}

			</div>
		</Router>
	);
}

{/* <PrivateRoute
path='/protected'
render= {props => (
<Trip {...props} 
	trips={this.props.trips}
	deleteTrips={this.props.deleteTrips}
/> */}


export default App;





