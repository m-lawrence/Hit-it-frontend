import React from 'react';
import SingleCall from './SingleCall';

function Calls({ calls }) {
    const callsArr = calls.map(call => {
        return <SingleCall key={call.id} call={call} />
    })

    return (
      <div>
        <h1 className="callsHeader">Calls</h1>
        <div className="callsDiv">
            {callsArr}
        </div>
      </div>
    );
  }
  
  export default Calls;