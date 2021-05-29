import React, { useState } from 'react';
import SingleTour from './SingleTour';
import TourFormModal from './TourFormModal';

function TourList({ currentUser, addNewTour, tours }) {
    const [newTourClicked, setNewTourClicked] = useState(false)

    const toursArr = tours.map(tour => {
        return <SingleTour key={tour.id} tour={tour} />
    })

    function handleNewTourClick() {
        setNewTourClicked(newTourClicked => !newTourClicked)
    }
   
    return (
      <div className="tourListDiv">
        {toursArr}
        <div className="tourCard" onClick={handleNewTourClick}>
            <h4>+ Create new tour!</h4>
        </div>
        {newTourClicked && 
            <TourFormModal setNewTourClicked={setNewTourClicked} currentUser={currentUser} addNewTour={addNewTour}/>}
      </div>
    );
  }
  
  export default TourList;