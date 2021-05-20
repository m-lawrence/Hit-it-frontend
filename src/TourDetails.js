import React from 'react';
import { useLocation} from 'react-router-dom'

function TourDetails() {
  const location = useLocation()
  // console.log(location.state.params)
    return (
      <div>
        <h1>{location.state.params.name}</h1>
      </div>
    );
  }
  
  export default TourDetails;