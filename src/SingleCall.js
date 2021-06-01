import React, { useState } from 'react';
import moment from 'moment'
import { useHistory } from 'react-router-dom';

function SingleCall({ call, loggedInUser, bands }) {
    const [callClicked, setCallClicked] = useState(false)
    const history = useHistory()
    
    function handleCallCardClick() {
        setCallClicked(callClicked => !callClicked)
    }
   
    const callBand = bands.filter(band => {
        return band.id === call.band_user_id
    })
    const band = callBand[0]

    function handleCallBandClick() {
        history.push(`bands/${band.id}`, {params: band})
    }

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
                <button className="bandLinkButton" onClick={handleCallBandClick}>Band page</button>
            </div>}
      </div>
    );
  }
  
  export default SingleCall;
