import React, { useState } from 'react';
import SingleTour from './SingleTour';

function TourList({ currentUser, addNewTour, tours }) {
    const [newTourClicked, setNewTourClicked] = useState(false)
    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    const toursArr = tours.map(tour => {
        return <SingleTour key={tour.id} tour={tour} />
    })

    function handleNewTourClick() {
        setNewTourClicked(newTourClicked => !newTourClicked)
    }

    function handleNewTourSubmit(e) {
        e.preventDefault()
        
        const newTour = {
            name,
            image,
            band_user_id: currentUser.id
        }

        fetch('http://localhost:3000/tours', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTour)
        })
            .then(res => res.json())
            .then(addNewTour)

    }
   
    return (
      <div className="tourListDiv">
        {toursArr}
        <div className="tourCard" onClick={handleNewTourClick}>
            <h4>+ Create new tour!</h4>
        </div>
        {newTourClicked && 
            <div>
                <form onSubmit={handleNewTourSubmit}>
                    <label>Name: </label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <label>Image URL: </label>
                    <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)}></input>
                    <input type="submit"></input>
                </form>
            </div>}
      </div>
    );
  }
  
  export default TourList;