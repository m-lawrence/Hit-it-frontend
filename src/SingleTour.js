import React from 'react';
import { useHistory } from 'react-router-dom';


function SingleTour({ tour }) {
    const { id, band_user_id, name, image } = tour
    
    const history = useHistory()

    function handleTourClick() {
        history.push(`./tours/${id}`)
    }
    
    return (
      <div onClick={handleTourClick}>
        <img src={image} alt={name} className='singleTourImg'/>
        <h4 className='singleTourHeading'>{name}</h4>
      </div>
    );
  }
  
  export default SingleTour;