import React from 'react';
import SingleVenue from './SingleVenue';
import VenueCatFilter from './VenueCatFilter';
import VenueMap from './VenueMap';

function Venues({ venues, search, setSearch, setSearchText, setSelectedVenueCategory }) {
    const removedTbd = venues.filter(venue => {
        return venue.name !== "TBD"
    })
    const venuesArr = removedTbd.map(venue => {
        return <SingleVenue key={venue.id} venue={venue} />
    })

    function handleSearchSubmit(e) {
        e.preventDefault()
        setSearchText(search)
    }

    return (
      <div className="venueMainContainer">
        <h1>Search Venues</h1>
        <VenueMap venuesToMap={removedTbd}/>
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
        <VenueCatFilter setSelectedVenueCategory={setSelectedVenueCategory} />
        <div className="venueListDiv">
            {venuesArr}
        </div>
      </div>
    );
  }
  
  export default Venues;