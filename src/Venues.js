import React, { useState, useEffect } from 'react';
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
        if (search.toLowerCase() === 'atlanta') {
            const coords = [33.77990525357063, -84.41649324950257]
            return setMapCoordinates(coords)
        } else if (search.toLowerCase() === 'asheville') {
            const coords = [35.58884248434797, -82.56472777557953]
            return setMapCoordinates(coords)
        } else if (search.toLowerCase() === 'raleigh') {
            const coords = [35.830048620384105, -78.64163165285372]
            return setMapCoordinates(coords)
        } else if (search.toLowerCase() === 'chattanooga') {
            const coords = [35.04651379541796, -85.28951243407434]
            return setMapCoordinates(coords)
        } else if (search.toLowerCase() === 'athens') {
            const coords = [33.95422253438973, -83.36474904377586]
            return setMapCoordinates(coords)
        }
    }
   
    useEffect(() => {
        setViewport({...viewport, latitude: mapCoordinates[0], longitude: mapCoordinates[1]})
    }, [mapCoordinates])

    
    return (
      <div className="venueMainContainer">
        <h1>Search Venues</h1>
        <VenueMap key={mapCoordinates[0] + mapCoordinates[1]} venuesToMap={removedTbd} searchText={searchText} mapCoordinates={mapCoordinates} viewport={viewport} setViewport={setViewport}/>
        <div className="venuesSearchContainer">
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
        </div>
        <div className="venueListDiv">
            {venuesArr}
        </div>
      </div>
    );
  }
  
  export default Venues;