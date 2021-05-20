import React from 'react';
import { useLocation} from 'react-router-dom'
import SingleShow from './SingleShow';

function TourDetails() {
  const location = useLocation()

  const showsArr = location.state.params.shows.map(show => {
    return <SingleShow key={show.id} show={show}/>
  })
  
    return (
      <div>
        <h1>{location.state.params.name}</h1>
        <img src={location.state.params.image} alt={location.state.params.name}/>
        {showsArr}
      </div>
    );
  }
  
  export default TourDetails;