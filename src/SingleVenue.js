import React, { useState } from 'react';

function SingleVenue({ venue }) {
    const [venueClicked, setVenueClicked] = useState(false)

    function handleVenueClick() {
        setVenueClicked(venueClicked => !venueClicked)
    }

    return (
      <div className="venueCard">
        <p className="venueCardName">{venue.name} | </p>
        <img src={venue.image} alt={venue.name} />
        <p className="venueCardLocation">{venue.location}</p>
        <button className="moreLessBtn" onClick={handleVenueClick}>{venueClicked ? '-' : '+'}</button>
        {venueClicked &&
            <div>
                <p>{venue.description}</p><br></br>
                <p><span>Website: </span><a href={venue.website} target="_blank">{venue.website}</a></p><br></br>
                <p><span>Booking: </span>{venue.booking}</p>
            </div>}
      </div>
    );
  }
  
  export default SingleVenue;