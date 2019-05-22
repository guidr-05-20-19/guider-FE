import React from 'react';
import { connect } from 'react-redux';
import { getTrips } from '../actions';

class TripList extends React.Component {

    componentDidMount(){
        this.props.getTrips()
        console.log(this.state)
    }

    routeToTrip = (e, trip) => {
        e.preventDefault();
        this.props.history.push(`/trip-list/${trip.id}`);
    }

    render(){
        if (this.props.isFetching)
            return (
                <h1>Waiting</h1>
            );
            console.log(this.props)
            console.log(this.state)
        
            return(
        
            <div className= "tripslist">
            <h1>hello</h1>
                         
            {this.props.trips.map(trip => {
                return(
                    <div className = "trip-card" 
                        // onClick= {this.routeToTrip}
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

const mapStatesToProps = state => {
    return {fetchingData: state.loginReducer.fetchingData
    ,
    trips: state.getTripsReducer.trips,
    log: console.log(state)
    }
}

export default connect(mapStatesToProps, {getTrips} )(TripList);
