import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import horns from './horn_hands_crop.png'

function VenueMap({ venuesToMap, searchText, mapCoordinates, viewport, setViewport }) {
    // const [viewport, setViewport] = useState({
    //     latitude: mapCoordinates[0],
    //     longitude: mapCoordinates[1],
    //     zoom: 10,
    //     width: '30vw',
    //     height: '20vw'
    // })
    const [selectedVenue, setSelectedVenue] = useState(null)


    return (
      <div>
        <ReactMapGL 
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        className="venueMap"
        mapStyle="mapbox://styles/mlawrence14/ckou2hnwa6bdj17ps1qnv32n7"
        onViewportChange={viewport => {
            setViewport(viewport)
        }}>
            {venuesToMap.map((venue) => {
                return <Marker key={venue.id} latitude={venue.latitude} longitude={venue.longitude}>
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault()
                        setSelectedVenue(venue)
                    }}>
                        <img src={horns} />
                    </button>
                </Marker>
            })}

            {selectedVenue && (
                <Popup 
                latitude={selectedVenue.latitude} 
                longitude={selectedVenue.longitude} 
                className="mapPopup" 
                onClose={() => {
                    setSelectedVenue(null)
                }}>
                    <div>
                        <h1>{selectedVenue.name}</h1>
                        <img src={selectedVenue.image} />
                    </div>
                </Popup>
            )}
        </ReactMapGL>
      </div>
    );
  }
  
  export default VenueMap;