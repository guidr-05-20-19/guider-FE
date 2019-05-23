import React from 'react';
import { connect } from 'react-redux';

const Trip = props => {
    
    
const trip = props.trips.find( trip => `${trip.id}` === props.match.params.id);
console.log(trip)
    

    // updateTrip = e => {
    //     e.preventDefault();
    //     this.props.history.push('/update-form')
    // }

    // const deleteTrip = (e,id) => {
    //     e.preventDefault();
    //     // this.setState({ deletingTrip: id})
    //     this.props.deleteTrips(trip.id);

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
                {/* <button onClick={this.updateTrip}>Edit Trip</button> */}
                {/* <button onClick= {this.deleteTrip}>Delete Trip</button> */}
            </div>
        )
    
}


export default connect(null, {})(Trip);

