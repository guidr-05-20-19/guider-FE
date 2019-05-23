import React from 'react';
import { connect } from 'react-redux';
import  { addTrip } from '../actions/index';

class TripForm extends React.Component{
    state = {
        trips: {
            title: '',
            duration: '',
            date: '',
            description: '',
            location: '',
        }
    }

changeHandler = e => {
    this.setState ({
        trips: {
        ...this.state.trips,
        [e.target.name]: e.target.value
        }
    });
};

submitHandler = e => {
    e.preventDefault();
    this.props
        .addTrip(this.state.trips)
        // .then(() => this.props.history.push('/protected'))

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
                <label htmlFor = "title">Trip Title:</label>
                <input
                    type = "text"
                    name = "title"
                    placeholder= "Eagle Rock"
                    value = {this.state.trips.title}
                    onChange= {this.changeHandler}
                 />
                <label htmlFor = "duration">Duration:</label>
                <input
                    type = "text"
                    name = "duration"
                    placeholder= "4.5 hours"
                    value = {this.state.trips.duration}
                    onChange = {this.changeHandler}
                />
                <label htmlFor = "Date">Date:</label>
                <input 
                    type = "text"
                    name = "date"
                    placeholder= "MM/DD/YYYY"
                    value = {this.state.trips.date}
                    onChange= {this.changeHandler}
                />
                <label htmlFor = "Description">Description: </label>
                <textarea
                    name= "description"
                    placeholder= "Type out your description here"
                    value= {this.state.trips.description}
                    onChange= {this.changeHandler}
                />
                <button>Add Trip</button>
            </form>
            </div>
        )

    }

}

const mapStatetoProps = state => {
    return {
        addingTrip: state.addTripsReducer.addingTrip
    }
}
    
export default connect(mapStatetoProps, { addTrip })(TripForm);