import React from 'react';
import { connect } from 'react-redux';
import { getTrips, addTrip } from '../actions';
import { withRouter, NavLink, Route } from 'react-router-dom';
import TripForm from './TripForm'
import Trip from './Trip'

import { bindActionCreators } from '../../../../../../../Library/Caches/typescript/3.2/node_modules/redux';

class TripList extends React.Component {

    componentDidMount(){
        this.props.getTrips()
        console.log(this.state)
    }

    // routeToTrip = (e, trip) => {
    //     e.preventDefault();
    //     // this.props.history.push(`/trip-list/${trip.id}`);
    // }

 

    

    render(){
        if (this.props.isFetching)
            return (
                <h1>Waiting</h1>
            );
            console.log(this.props)
            console.log(this.state)
        
            return(
        
            <div className= "tripslist">
            
            <TripForm addTrip= {this.props.addTrip}/>
                         
                 {this.props.trips.map((trip) => {
                     return(
                    <NavLink to={`/protected/${trip.id}`}>
                    <div className = "trip-card" 
                    // onClick= {this.routeToTrip}
                        key={trip.id}
                    >
                    <h4>{trip.title}</h4>
                    <h6>{trip.date}</h6>
                    <h6>{trip.duration}</h6>
                    </div>
                    </NavLink>
                    )
                    })}

                    <Route
                    path='/protected/:id'
                    render={props => (
                    <Trip {...props} 
                        trips={this.props.trips}
                        deleteTrips={this.props.deleteTrips}
                    />
                  )}
                    />

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

export default withRouter(
    connect(
      mapStatesToProps,
      { getTrips, addTrip }
    )(TripList)
  );
  