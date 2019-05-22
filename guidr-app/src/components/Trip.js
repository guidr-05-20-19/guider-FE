<<<<<<< HEAD
/
=======
import React from 'react';
import { connect } from 'react-redux';

class Trip extends React.Component {
    state = {
        trip: null,
        deletingTrip: null,
        editingTrip: null
    }

    componentDidMount(){
        this.state.getTripId()
        // getTripID from actions and reducer 
    }

    updateTrip = e => {
        e.preventDefault();
        this.props.history.push('/update-form')
    }

    deleteTrip = (e,id) => {
        e.preventDefault();
        this.setState({ deletingTrip: id})
        this.props.deleteTrips(id);

    }

    render(){
        const { trip } = this.state;
        return(
            <div className = "eachTrip">
                <h2>{trip.title}</h2>
                <h6>{trip.duration} hrs</h6>
                <h6>{trip.date}</h6>
                <p>{trip.description}</p>
                <button onClick={this.updateTrip}>Edit Trip</button>
                <button onClick= {this.deleteTrip}>Delete Trip</button>
            </div>
        )
    }
}

export default connect(null, {})(Trip);
>>>>>>> a8c4452940987a58edc238a157fd5a65956e63bf
