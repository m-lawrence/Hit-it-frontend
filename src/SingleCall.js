import React, { useState } from 'react';
import moment from 'moment'
import { Link } from "react-router-dom";

function SingleCall({ call, loggedInUser, bands }) {
    const [callClicked, setCallClicked] = useState(false)
    
    function handleCallCardClick() {
        setCallClicked(callClicked => !callClicked)
    }
   
    const callBand = bands.filter(band => {
        return band.id === call.band_user_id
    })


    return (
      <div className="callCard" onClick={handleCallCardClick}>
        <p>{call.location}</p>
        <p>{moment(call.date).format("MM-DD-YY")}</p>
        <p>{moment(call.time).format("LT")}</p>
        <p>At: {call.venue_name}</p>
        <p>Details: {call.details}</p>
        {callClicked && 
            <div>
                <p>Call from: {callBand[0].name}</p>
                <p>Email: {callBand[0].email}</p>
                <Link to='/profile'>Band Page</Link>
            </div>}
      </div>
    );
  }
  
  export default SingleCall;
