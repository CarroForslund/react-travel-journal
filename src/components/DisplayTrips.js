import React from 'react';
import { useStore } from './../StoreContext';
import TripListing from './TripListing';

const  DisplayTrips = React.memo(() => {
    const { trips } = useStore();
    return(
        <>
            <h2>My Trips</h2>
            {trips.map( trip => {
                return(
                    <TripListing key={trip.name} trip={trip}/>
                )
            })}
        </>
    );
})
export default DisplayTrips;