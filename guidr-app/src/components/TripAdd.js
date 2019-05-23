import React from 'react';
import { connect } from 'react';

class TripUpdate extends React.Component {
    state ={
        trips: this.props.trips
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            trips: {
            ...this.state.trips,
            [e.target.name]: e.target.value
            }
        })
    }


    updateTrip = e => {
        this.props.editFriends(e, this.state.trips)
    }


    render(){
        return(
            <div className= "edit-form">
                <form onSubmit={this.updateTrip}>
                <label for = "title">Trip Title:</label>
                <input
                    type = "text"
                    name = "title"
                    placeholder= "Eagle Rock"
                    value = {this.state.trips.username}
                    onChange= {this.changeHandler}
                 />
                <label for = "duration">Duration:</label>
                <input
                    type = "text"
                    name = "duration"
                    value = {this.state.trips.duration}
                    onChange = {this.changeHandler}
                />
                <label for ="email">Email:</label>
                <input 
                    type = "text"
                    name = "date"
                    value = {this.state.trips.date}
                    onChange= {this.changeHandler}
                />
                <label for = "password">Description: </label>
                <input
                    type= "text"
                    name= "description"
                    value= {this.state.trips.description}
                    onChange= {this.changeHandler}
                />
                <button>Update Trip</button>
            </form>





            </div>

        )
    }

}

const mapStatetoProps = state => {

}

export default connect(mapStatetoProps, {})(TripUpdate)