import React from 'react';

const TripListing = React.memo((props) => {
    return(
        <div>
            <h3>{props.trip.name}</h3>
            <p>{props.trip.country}</p>
            <p>{props.trip.description}</p>
        </div>
    );
});
export default TripListing;