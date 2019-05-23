import React from 'react';
import { connect } from 'react-redux';
import { getTrips, addTrip, deleteTrip } from '../actions';
import { withRouter, Link, Route } from 'react-router-dom';

const Trip = props => {
    
    
const trip = props.trips.find( trip => `${trip.id}` === props.match.params.id);

    

    // updateTrip = e => {
    //     e.preventDefault();
    //     this.props.history.push('/update-form')
    // }

    // const deleteHandler = (e) => {
    //     e.preventDefault();
    //     props.deleteTrip(trip.id);
    //      props.history.push('/protected');
        

    // }

    if (!trip) {
        return <h2>Loading item data...</h2>;
      }
      
        return(
            <div className = "eachTrip">
                <h2>{trip.title}</h2>
                <h6>{trip.duration} hrs</h6>
                <h6>{trip.date}</h6>
                <p>{trip.description}</p>
                <p>{trip.id}</p>
                {/* <button onClick={this.updateTrip}>Edit Trip</button> */}
                <button onClick= {ev => {
         ev.preventDefault();
         props.deleteTrip(trip.id);
         props.history.push('/protected');
         }}>Delete Trip</button>
            </div>
        )
    
}


const mapStatesToProps = state => {
    return {fetchingData: state.loginReducer.fetchingData,
    trips: state.getTripsReducer.trips,
    isDeleting: state.deleteTripsReducer.isDeleting,
    isAdding: state.addTripReducer.isAdding,
    log: console.log(state)
    }
}

export default withRouter(
    connect(
      mapStatesToProps,
      { getTrips, addTrip, deleteTrip }
    )(Trip)
  );

