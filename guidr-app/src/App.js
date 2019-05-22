import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import PrivateRoute from './components/PrivateRoute';
import TripsList from './components/TripsList';

function App() {
<<<<<<< HEAD
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/reg">Register</Link>
            <Link to="/login">Login</Link>
          </li>
        
        </ul>
        <Route path="/login" component={Login} />
        <Route exact path="/reg" component= {Registration} />
        <PrivateRoute exact path ="/protected" component={TripsList} />
      
      </div>
    </Router>
  );
=======
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to="/reg">Register</Link>
						<Link to="/login">Login</Link>
					</li>
				</ul>
				<Route path="/" component={Login} />
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
			</div>
		</Router>
	);
>>>>>>> 7a99549b36144b0a92ed261b580a2e0e1d096ec6
}

export default App;





