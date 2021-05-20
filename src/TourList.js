import React, { useState } from 'react';
import SingleTour from './SingleTour';

function TourList({ currentUser }) {
    const [newTourClicked, setNewTourClicked] = useState(false)

    const toursArr = currentUser.tours.map(tour => {
        return <SingleTour key={tour.id} tour={tour} />
    })

    function handleNewTourClick() {
        setNewTourClicked(newTourClicked => !newTourClicked)
    }
   
    return (
      <div>
        {toursArr}
        <div onClick={handleNewTourClick}>
            <h4>Create new tour!</h4>
        </div>
        {newTourClicked && 
            <div>
                <form>
                    <label>Name: </label>
                    <input type="text"></input>
                    <label>Image URL: </label>
                    <input type="text"></input>
                    <input type="submit"></input>
                </form>
            </div>}
      </div>
    );
  }
  
  export default TourList;