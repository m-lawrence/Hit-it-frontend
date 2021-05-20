import React from 'react';
import SingleVenue from './SingleVenue';

function Venues({ venues, search, setSearch }) {
    const venuesArr = venues.map(venue => {
        return <SingleVenue key={venue.id} venue={venue} />
    })

  
      function handleSearchChange(e) {
        setSearch(e.target.value)
      }

    return (
      <div>
        <h1>Search Venues</h1>
        <form className="searchbar">
            <input
                type="text"
                id="search"
                placeholder="Location"
                value={search}
                onChange={handleSearchChange}
            />
        </form>
        {venuesArr}
      </div>
    );
  }
  
  export default Venues;