import React from 'react';
import SingleVenue from './SingleVenue';

function Venues({ venues }) {
    const venuesArr = venues.map(venue => {
        return <SingleVenue key={venue.id} venue={venue} />
    })
    return (
      <div>
        <h1>Search Venues</h1>
        {venuesArr}
      </div>
    );
  }
  
  export default Venues;