import React from 'react';
import moment from 'moment'

function SingleCall({ call }) {
    return (
      <div className="callCard">
        <p>{call.location}</p>
        <p>{moment(call.date).format("MM-DD-YY")}</p>
        <p>{moment(call.time).format("LT")}</p>
        <p>At: {call.venue_name}</p>
        <p>Details: {call.details}</p>
      </div>
    );
  }
  
  export default SingleCall;
