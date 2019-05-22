import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration'
<<<<<<< HEAD



=======
import PrivateRoute from './components/PrivateRoute';
import TripsList from './components/TripsList';

>>>>>>> a8c4452940987a58edc238a157fd5a65956e63bf

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/reg">Register</Link>
            <Link to="/login">Login</Link>
          </li>
<<<<<<< HEAD
          <li>
            {/* <Link to="/">Protected Page</Link> */}
          </li>
=======
        
>>>>>>> a8c4452940987a58edc238a157fd5a65956e63bf
        </ul>
        <Route path="/" component={Login} />
        <Route exact path="/reg" component= {Registration} />
        <PrivateRoute exact path ="/protected" component={TripsList} />
      
<<<<<<< HEAD
      
        <PrivateRoute exact path="/protected" component={GasPrices} /> */}
=======
>>>>>>> a8c4452940987a58edc238a157fd5a65956e63bf
      </div>
    </Router>
  );
}

export default App;
