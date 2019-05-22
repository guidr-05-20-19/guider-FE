import React from 'react';
import { connect } from 'react-redux';

class TripForm extends React.Component{
    state = {
        trips: {
            title: '',
            duration: '',
            date: '',
            description: '',
        }
    }

changeHandler = e => {
    this.setState ({
        ...this.state.trips,
        [e.target.name]: e.target.value
    })
}

submitHandler = e => {
    e.preventDefault();
    // this.props.addTrip(this.state.trip).then(() => {
    //     this.props.history.push('/protected')
    // })
    this.setState({
        trips: {
            title: '',
            duration: '',
            date: '',
            description: '',
        }
    });

};

    render(){
        return(
            <div className="tripform">
            <form onSubmit={this.submitHandler}>
                <label for = "title">Trip Title:</label>
                <input
                    type = "text"
                    name = "title"
                    placeholder= "Eagle Rock"
                    value = {this.state.trips.username}
                    onChange= {this.changeHandler}
                 />
                <label for = "duration">Duration:</label>
                <input
                    type = "text"
                    name = "duration"
                    value = {this.state.trips.duration}
                    onChange = {this.changeHandler}
                />
                <label for ="email">Email:</label>
                <input 
                    type = "text"
                    name = "date"
                    value = {this.state.trips.date}
                    onChange= {this.changeHandler}
                />
                <label for = "password">Description: </label>
                <input
                    type= "text"
                    name= "description"
                    value= {this.state.trips.description}
                    onChange= {this.changeHandler}
                />
                <button>Add Trip</button>
            </form>
            </div>
        )

    }

}

const mapStatetoProps = state => ({
    //map states to reducer here
    })
    
export default connect(mapStatetoProps, { })(TripForm);