import React, { useState } from 'react';

function SingleVenue({ venue }) {
    const [venueClicked, setVenueClicked] = useState(false)

    function handleVenueClick() {
        setVenueClicked(venueClicked => !venueClicked)
    }

    return (
      <div>
        <h4>{venue.name}</h4>
        <img src={venue.image} alt={venue.name} />
        <p>{venue.location}</p>
        <button onClick={handleVenueClick}>{venueClicked ? 'Less' : 'More'}</button>
        {venueClicked &&
            <div>
                <p>{venue.description}</p>
                <p>Website: {venue.website}</p>
                <p>Booking: {venue.booking}</p>
            </div>}
      </div>
    );
  }
  
  export default SingleVenue;