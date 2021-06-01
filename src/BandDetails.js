import React from 'react';
import { useParams } from "react-router-dom";

function BandDetails() {
    
    return (
        <div className="profileMainContainer">
        <h1 className='bandProfileHeader'>name</h1>
        <div className="bandInfoDiv">
            {/* <div className='bandProfileImgDiv'>
                <img className='bandProfileImg' src={currentUser.image} alt={currentUser.name} />
            </div> */}
            <div className='bandInfo'>
                <p><span className="profSpan">Email: </span></p>
                <p><span className="profSpan">Website: </span></p>
                <p><span className="profSpan">Facebook: </span></p>
                <p><span className="profSpan">Music: </span></p>
                <p><span className="profSpan">Genre: </span></p>
                <p><span className="profSpan">Location: </span></p>
                <p><span className="profSpan">Band members: </span></p>
                <p><span className="profSpan">Bio: </span></p>
            </div>
        </div>
        </div>
    );
  }
  
  export default BandDetails;