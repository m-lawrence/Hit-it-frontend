import React from 'react';
import SingleVenue from './SingleVenue';

function Venues({ venues, search, setSearch, setSearchText }) {
    const venuesArr = venues.map(venue => {
        return <SingleVenue key={venue.id} venue={venue} />
    })

    function handleSearchSubmit(e) {
        e.preventDefault()
        setSearchText(search)
    }

    return (
      <div>
        <h1>Search Venues</h1>
        <form className="searchbar" onSubmit={handleSearchSubmit}>
            <input
                type="text"
                id="search"
                placeholder="Location"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
        {venuesArr}
      </div>
    );
  }
  
  export default Venues;