import React from 'react';
import SingleTour from './SingleTour';

function TourList({ currentUser }) {
    const toursArr = currentUser.tours.map(tour => {
        return <SingleTour key={tour.id} {...tour} />
    })
    return (
      <div>
        {toursArr}
      </div>
    );
  }
  
  export default TourList;