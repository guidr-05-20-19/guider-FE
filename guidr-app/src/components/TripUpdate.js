import React from 'react';
import { connect } from 'react-redux';
import { updateTrip } from '../actions';

class TripUpdate extends React.Component {
    state ={
        trip: this.props.trip
    }

    changeHandler = e => {
        this.setState({
            trip: {
            ...this.state.trip,
            [e.target.name]: e.target.value
            }
        })
    }


    updateTrip = e => {
        console.log(this.props)
        this.props.updateTrip(this.state.trip, this.state.trip.id)
    }


    render(){
        console.log(this.props)
        return(
            <div className="tripform">
            <form onSubmit={this.updateTrip}>
                <label htmlFor = "title">Trip Title:</label>
                <input
                    type = "text"
                    name = "title"
                    placeholder= "Eagle Rock"
                    value = {this.state.trip.title}
                    onChange= {this.changeHandler}
                 />
                <label htmlFor = "duration">Duration:</label>
                <input
                    type = "text"
                    name = "duration"
                    placeholder= "4.5 hours"
                    value = {this.state.trip.duration}
                    onChange = {this.changeHandler}
                />
                <label htmlFor = "Date">Date:</label>
                <input 
                    type = "text"
                    name = "date"
                    placeholder= "MM/DD/YYYY"
                    value = {this.state.trip.date}
                    onChange= {this.changeHandler}
                />
                <label htmlFor = "Description">Description: </label>
                <textarea
                    name= "description"
                    placeholder= "Type out your description here"
                    value= {this.state.trip.description}
                    onChange= {this.changeHandler}
                />
                <button>{this.props.updatingTrip ? ('Updating') : ('Update Trip') }</button>
            </form>

            </div>

        )
    }

}

const mapStatetoProps = state => {
    return {
        updatingTrip: state.updateTripsReducer.updatingTrip
    }
}

 export default connect(mapStatetoProps, { updateTrip })(TripUpdate)