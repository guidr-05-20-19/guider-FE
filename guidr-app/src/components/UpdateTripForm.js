import React from 'react';
import { connect } from 'react-redux';
import { updateTrip} from '../actions';
import { withRouter, Link, Route } from 'react-router-dom';

class UpdateTripForm extends React.Component {
    state = {
        updatedTrip: {
            title: '',
            duration: '',
            description: '',
            trip_type: '',
            location: '',
            // professional: false, 
            // date: '',
            // id: '',
            // user_id: 2
        }
    }

changeHandler = e => {
    this.setState ({
        updatedTrip: {
        ...this.state.updatedTrip,
        [e.target.name]: e.target.value
        }
    })
}


submitHandler = e => {
    e.preventDefault();
        const updatedTrip = {
            ...this.state.updatedTrip,
                date: this.props.trip.date,
                id: this.props.trip.id,
                professional: this.props.trip.professional
        } 
        this.props.updateTrip(updatedTrip, this.props.trip.id)
    // .then(() => {
    //     this.props.history.push('/protected')
    // })

    this.setState({
        updatedTrip: {
            title: '',
            duration: '',
            description: '',
            trip_type: '',
            location: '',
            // professional: false, 
            // date: '',
            // id: '',
            // user_id: 2
        }
    });

    console.log(updatedTrip)

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
                    value = {this.state.updatedTrip.title}
                    onChange= {this.changeHandler}
                 />
                <label for = "duration">Duration:</label>
                <input
                    type = "text"
                    name = "duration"
                    value = {this.state.updatedTrip.duration}
                    onChange = {this.changeHandler}
                />
                <label for ="_type">trip_type:</label>
                <input 
                    type = "text"
                    name = "trip_type"
                    value = {this.state.updatedTrip.trip_type}
                    onChange= {this.changeHandler}
                />
                 <label for ="location">location</label>
                <input 
                    type = "text"
                    name = "location"
                    value = {this.state.updatedTrip.location}
                    onChange= {this.changeHandler}
                />
                <label for = "password">Description: </label>
                <input
                    type= "text"
                    name= "description"
                    value= {this.state.updatedTrip.description}
                    onChange= {this.changeHandler}
                />         
                <button className="form-button">Update Trip</button>
          </form>
        </div>
      );
    }
  }
  
  
  const mapStatesToProps = state => {
    return {
    isUpdating: state.updateTripReducer.isUpdating,
    // log: console.log(state)
    }
}

export default withRouter(
    connect(
      mapStatesToProps,
      { updateTrip}
    )(UpdateTripForm)
  );