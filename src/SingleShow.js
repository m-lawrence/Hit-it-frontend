import React, { useState } from 'react';

function SingleShow({ show, venue, removeShow }) {
    const [showClicked, setShowClicked] = useState(false)
    const [showEditClicked, setShowEditClicked] = useState(false)

    function handleShowClick() {
        setShowClicked(showClicked => !showClicked)
    }

    function handleShowEditClick() {
        setShowEditClicked(showEditClicked => ! showEditClicked)
    }

    function handleShowDeleteClick() {
        fetch(`http://localhost:3000/shows/${show.id}`, {
            method: 'DELETE'
        })
        removeShow(show.id)
    }
  
    return (
      <div>
        <p>{show.date}</p>
        <p>{show.location}</p>
        <p>{show.time}</p>
        <p>{venue[0].name}</p>
        <button onClick={handleShowClick}>{showClicked ? 'Less' : 'More'}</button>
        {showClicked &&
         <div>
           <p>With: {show.other_bands}</p>
           <p>Details: {show.details}</p>
           <button onClick={handleShowEditClick}>Edit</button>
           <button onClick={handleShowDeleteClick}>Delete</button>
         </div>}
         {showEditClicked && showClicked &&
         <div>
           <form>
               <label>Date: </label>
               <input type="text"></input>
               <label>Location: </label>
               <input type="text"></input>
               <label>Time: </label>
               <input type="text"></input>
               <label>Venue: </label>
               <input type="text"></input>
               <label>Other bands: </label>
               <input type="text"></input>
               <label>Details: </label>
               <input type="text"></input>
               <input type="submit"></input>
            </form> 
        </div>}
      </div>
    );
  }
  
  export default SingleShow;