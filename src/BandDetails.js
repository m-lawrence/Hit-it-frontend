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
                <p><span className="profSpan">Website: </span>{location.state.params.website}</p>
                <p><span className="profSpan">Facebook: </span>{location.state.params.facebook}</p>
                <p><span className="profSpan">Music: </span>{location.state.params.music_link}</p>
                <p><span className="profSpan">Genre: </span>{location.state.params.genre}</p>
                <p><span className="profSpan">Location: </span>{location.state.params.location}</p>
                <p><span className="profSpan">Band members: </span>{location.state.params.band_members}</p>
                <p><span className="profSpan">Bio: </span>{location.state.params.bio}</p>
            </div>
        </div>
        </div>
    );
  }
  
  export default BandDetails;