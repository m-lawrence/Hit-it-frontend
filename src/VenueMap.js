import React, { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

function VenueMap({ venuesToMap }) {
    const [viewport, setViewport] = useState({
        latitude: 35.58884248434797,
        longitude: -82.56472777557953,
        zoom: 10,
        width: '30vw',
        height: '20vw'
    })

    return (
      <div>
        <ReactMapGL 
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mlawrence14/ckou2hnwa6bdj17ps1qnv32n7"
        onViewportChange={viewport => {
            setViewport(viewport)
        }}>
            {venuesToMap.map((venue) => {
                <Marker key={venue.id} latitude={venue.latitude} longitude={venue.longitude}>
                    <p>Music!!!!!!!!!!!!!!!!!!</p>
                    {console.log(venue.latitude)}
                </Marker>
            })}
        </ReactMapGL>
      </div>
    );
  }
  
  export default VenueMap;