import React, { useState } from 'react';
import moment from 'moment'

function SingleCall({ call, loggedInUser }) {
    const [callClicked, setCallClicked] = useState(false)
    
    function handleCallCardClick() {
        setCallClicked(callClicked => !callClicked)
    }

    return (
      <div className="callCard" onClick={handleCallCardClick}>
        <p>{call.location}</p>
        <p>{moment(call.date).format("MM-DD-YY")}</p>
        <p>{moment(call.time).format("LT")}</p>
        <p>At: {call.venue_name}</p>
        <p>Details: {call.details}</p>
        {callClicked && 
            <div>
                <p>Call from: {loggedInUser[0].name}</p>
                {/* add link to band's page? */}
            </div>}
      </div>
    );
  }
  
  export default SingleCall;
