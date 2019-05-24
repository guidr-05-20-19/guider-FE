import React from 'react';
import { connect } from 'react-redux';
import { getoneTrip , deleteTrip } from '../actions';
import TripUpdate from './TripUpdate';

class Trip extends React.Component {
    state = {
        editingTripId: null
    }

    componentDidMount(){
        console.log(this.props)
        this.props.getoneTrip(this.props.match.params.id)
    }

    updateTrip = e => {
        e.preventDefault();
        this.props
            .updateTrip(this.props.match.params.id)
            .then ( () => { this.setState({ editingTripId: null }) } )
    }

    deleteTrip = e => {
        e.preventDefault();
        this.props.deleteTrip(this.props.match.params.id)
        this.props.history.push('/protected')

    }

    render(){
        if (this.state.editingTripId === this.props.onetrip.id){
            return (
                <div className = "updateform">
                <TripUpdate trip={this.props.onetrip} updateTrip={this.updateTrip} />
                </div>
            )
        }
        return(
            <div className = "eachTrip">
                <h2>{this.props.onetrip.title}</h2>
                <h6>{this.props.onetrip.duration} hrs</h6>
                <h6>{this.props.onetrip.date}</h6>
                <p>{this.props.onetrip.description}</p>
                <button onClick={() => this.setState({ editingTripId: this.props.onetrip.id})}>Edit Trip</button>
                <button onClick= {this.deleteTrip}>Delete Trip</button>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        getingoneTrip: state.getoneReducer.getingoneTrip,
        onetrip: state.getoneReducer.onetrip,
        deletingTrip: state.deleteReducer.deletingTrip,
        updatingTrip: state.updateTripsReducer.updatingTrip
    }
}

export default connect(mapStatetoProps, { getoneTrip, deleteTrip })(Trip);