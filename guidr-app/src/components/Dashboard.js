
// import React from "react";
// import { connect } from "react-redux";
// import { getTrips } from "../actions/getTrips"



// // the Dashboard is the home of the App. It is the container that houses everything from trips, to create trips flow etc.

// // build the actions & reducers you need to get this thing working: getTrips
// // DONE - build a button that takes you to a form that adds to the trip (build that form later) 
// // DONE - display a list of trips
// // implement react-router linking to be able to click into each trip
// //be able to click into each trip and then build out that trip page which includes an edit trip button


// class Dashboard extends React.Component {

//     componentDidMount() {
//         this.props.getTrips()        
//       }

//       render () {
//         if (this.props.isLoading) {
//             // return something here to indicate that you are fetching data
//             <h2>Grab a cupa Joe. I'm still loading...</h2>
//           }

//           return (
//             <div className= "dashboard-wrapper">
            
//               <button className="form-button">Create Trip</button>

//               <div className="trip-list">
//                 { this.props.trips.map (trip => {
//                     return 
//                     <Trip key={trip.id} trip={trip} />
//                 })}
              
//               </div> 

//             </div> 
            

//         )}





// }



