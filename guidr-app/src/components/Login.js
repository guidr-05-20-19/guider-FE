import React from 'react';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';

import { login } from '../actions/index';

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

    this.props.login(this.state.credentials).then(() => {
      this.props.history.push('/protected');
    });

    this.props.login(this.state.credentials)
    .then(() => {
      this.props.history.push('/protected');
      });

    });
  }
    render() {
      return (
      <div className= "log-in">
        <h4>Guidr:</h4>
        <form onSubmit={this.login}>
          <label htmlFor ="username">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label htmlFor = "password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log In</button>
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
