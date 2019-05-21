import React from 'react';
import { connect } from 'react-redux';

class TripList extends React.Component {

    componentDidMount(){
        this.props.getTrips()
    }

    routeToTrip = (e, trip) => {
        e.preventDefault();
        props.history.push(`/trip-list/${trip.id}`);
    }


    render(){
        return(
            <div className= "tripslist">
            {props.trips.map(trip => {
                return(
                    <div className = "trip-card" 
                        onClick= {this.routeToTrip}
                        key={trip.id}
                    >
                    <h4>{trip.title}</h4>
                    <h6>{trip.date}</h6>
                    <h6>{trip.duration}</h6>
                    </div>
                )} 
            )}

            </div>
        )
    }
}

const mapStatesToProps = state => ({
    isFetching: state.isFetching
})

export default connect(mapStatesToProps, {getTrips} )(TripList);