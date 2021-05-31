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
        <p>{call.location}</p><br></br><br></br>
        <p>{moment(call.date).format("MM-DD-YY")}</p>
        <p>{moment(call.time).format("LT")}</p><br></br><br></br>
        <p>At: {call.venue_name}</p><br></br><br></br>
        <p>Details: {call.details}</p><br></br><br></br>
        {callClicked && 
            <div>
                <p>Call from: {callBand[0].name}</p><br></br>
                <p>Email: {callBand[0].email}</p>
                {/* <Link to={`/profile/${callBand[0].id}`}>Band Page</Link> */}
            </div>}
      </div>
    );
  }
  
  export default SingleCall;
