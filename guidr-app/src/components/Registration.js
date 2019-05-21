import React from 'react';
import { connect } from 'react-redux';
import { addGuider } from '../actions';

class Registration extends React.Component {
    state = {
        username: '',
        email: '',
        name: '',
        password: '',
    }

    submitHandler = e => {
    e.preventDefault();
    this.props.addGuider(this.state).then(()=> {this.props.history.push('./Login')})
    //may need to lead to another page that is called 'successful', settime out, and then refresh to login page
    }

    changeHandler = e => {
    this.setState({...this.state, 
        [e.target.name]: e.target.value})
    }

    render(){
        return(
            <div className="regform">
            <form onSubmit={this.submitHandler}>
                <label for = "username">Username:</label>
                <input
                    type = "text"
                    name = "username"
                    value = {this.state.username}
                    onChange= {this.changeHandler}
                 />
                <label for = "name">Name:</label>
                <input
                    type = "text"
                    name = "name"
                    value = {this.state.name}
                    onChange = {this.changeHandler}
                />
                <label for ="email">Email:</label>
                <input 
                    type = "email"
                    name = "email"
                    value = {this.state.email}
                    onChange= {this.changeHandler}
                />
                <label for = "password">Password: </label>
                <input
                    type= "password"
                    name= "password"
                    value= {this.state.password}
                    onChange= {this.changeHandler}
                />
                <button>Register</button>
            </form>
            </div>
        )
    }
}

const mapStatetoProps = state => ({
//map states to reducer here
})

export default connect(mapStatetoProps, { addGuider })(Registration);