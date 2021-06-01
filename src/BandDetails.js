import React from 'react';
import { useLocation } from "react-router-dom";

function BandDetails() {
    const location = useLocation()
    console.log(location.state.params)
    return (
        <div className="bandProfileMainContainer">
        <h1 className='bandProfileHeader'>{location.state.params.name}</h1>
        <div className="bandInfoDiv">
            <div className='bandProfileImgDiv'>
                <img className='bandProfileImg' src={location.state.params.image} alt={location.state.params.name} />
            </div>
            <div className='bandInfo'>
                <p><span className="profSpan">Email: </span>{location.state.params.email}</p>
                {location.state.params.website && <p><span className="profSpan">Website: </span><a href={location.state.params.website} target="_blank">{location.state.params.website}</a></p>}
                {location.state.params.facebook && <p><span className="profSpan">Facebook: </span><a href={location.state.params.facebook} target="_blank">{location.state.params.facebook}</a></p>}
                {location.state.params.music_link && <p><span className="profSpan">Music: </span><a href={location.state.params.music_link} target="_blank">{location.state.params.music_link}</a></p>}
                {location.state.params.genre && <p><span className="profSpan">Genre: </span>{location.state.params.genre}</p>}
                {location.state.params.location && <p><span className="profSpan">Location: </span>{location.state.params.location}</p>}
                {location.state.params.band_members && <p><span className="profSpan">Band members: </span>{location.state.params.band_members}</p>}
                {location.state.params.bio && <p><span className="profSpan">Bio: </span>{location.state.params.bio}</p>}
            </div>
        </div>
        </div>
    );
  }
  
  export default BandDetails;