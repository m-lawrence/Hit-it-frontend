import React from 'react';
import { useHistory } from 'react-router-dom';


function SingleTour({ tour }) {
   
    const history = useHistory()

    function handleTourClick() {
        history.push(`./tours/${tour.id}`, {params: tour})
    }
    
    return (
      <div onClick={handleTourClick}>
        <img src={tour.image} alt={tour.name} className='singleTourImg'/>
        <h4 className='singleTourHeading'>{tour.name}</h4>
      </div>
    );
  }
  
  export default SingleTour;