import React from 'react';
import { connect } from 'react-redux';
import { getTrips, addTrip, deleteTrip, updateTrip } from '../actions'; //updateTrip
import { withRouter, Link, Route } from 'react-router-dom';
import UpdateTripForm from './UpdateTripForm'

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
            <div className = "trip-wrapper">
            
            <div className= 'trip-info'>
                <h2>{trip.title}</h2>
                <h6>{trip.duration} hrs</h6>
                <h6>{trip.date}</h6>
                <p>{trip.description}</p>
            </div>

                <button onClick= {ev => {
         ev.preventDefault();
         props.deleteTrip(trip.id);
         props.history.push('/protected');
         }}>Delete Trip</button>

            <UpdateTripForm trip={trip} />


            </div>
        )
    
}


const mapStatesToProps = state => {
    return {fetchingData: state.loginReducer.fetchingData,
    trips: state.getTripsReducer.trips,
    isDeleting: state.deleteTripsReducer.isDeleting,
    isAdding: state.addTripReducer.isAdding,
    // isUpdating: state.addTripReducer.isUpdating,
    log: console.log(state)
    }
}

export default withRouter(
    connect(
      mapStatesToProps,
      { getTrips, addTrip, deleteTrip, updateTrip
    //updateTrip 
      }
    )(Trip)
  );

