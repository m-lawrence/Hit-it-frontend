import React, { useState } from 'react';
import SingleVenue from './SingleVenue';
import VenueCatFilter from './VenueCatFilter';
import VenueMap from './VenueMap';


function Venues({ venues, search, setSearch, setSearchText, searchText,setSelectedVenueCategory, setMapCoordinates, mapCoordinates }) {
    const [viewport, setViewport] = useState({
        latitude: mapCoordinates[0],
        longitude: mapCoordinates[1],
        zoom: 10,
        width: '30vw',
        height: '20vw'
    })

    const removedTbd = venues.filter(venue => {
        return venue.name !== "TBD"
    })
    const venuesArr = removedTbd.map(venue => {
        return <SingleVenue key={venue.id} venue={venue} />
    })

    function handleSearchSubmit(e) {
        e.preventDefault()
        setSearchText(search)
        if (search === 'atlanta') {
            const coords = [33.77990525357063, -84.41649324950257]
            return setMapCoordinates(coords)
        } else if (search === 'asheville') {
            const coords = [35.58884248434797, -82.56472777557953]
            return setMapCoordinates(coords)
        }
        
    }
    
    return (
      <div className="venueMainContainer">
        <h1>Search Venues</h1>
        <VenueMap venuesToMap={removedTbd} searchText={searchText} mapCoordinates={mapCoordinates} viewport={viewport} setViewport={setViewport}/>
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