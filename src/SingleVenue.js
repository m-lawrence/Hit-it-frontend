import React from 'react';

function SingleVenue({ venue }) {
    return (
      <div>
        <h4>{venue.name}</h4>
        <img src={venue.image} alt={venue.name} />
      </div>
    );
  }
  
  export default SingleVenue;