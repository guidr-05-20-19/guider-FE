import React from 'react';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';

import { login } from '../actions/login';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
    .then(() => {
      this.props.history.push('/dashboard');
    });
  };

    render() {
      return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>'Log in'</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.loginReducer.isLoggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);




// import React from 'react';
// import { connect } from 'react-redux';

//  import { login } from '../actions';


// class Login extends React.Component {
//     state = {
//       credentials: {
//         username: '',
//         password: ''
//       }
//     };

//     login = e => {
//         e.preventDefault();
//         this.props.login(this.state.credentials)
//         .then(()=> {
//             this.props.history.push('/protected')
//         });


//     }


//     render() {

//         }

//     }


//     export default connect(null, {login})(Login);