import React, { useState } from 'react';

function SingleShow({ show, venue, removeShow, updateShow }) {
    const [showClicked, setShowClicked] = useState(false)
    const [showEditClicked, setShowEditClicked] = useState(false)
    const [editFormData, setEditFormData] = useState({
        date: show.date,
        location: show.location,
        time: show.time,
        venue: show.venue,
        other_bands: show.other_bands,
        details: show.details
    })

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

    function handleEditShowSubmit(e) {
        e.preventDefault()

        const updatedShow = {
            date:editFormData.date,
            location:editFormData.location,
            time:editFormData.time,
            other_bands:editFormData.other_bands,
            details:editFormData.details,
            tour_id: show.tour_id,
            venue_id: show.venue_id
        }

        fetch(`http://localhost:3000/shows/${show.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedShow)
        })
            // .then(response => response.json())
            // .then(data => updateShow(data))
            updateShow(updatedShow)
    }

    function handleEditShowChange(e) {
        setEditFormData({...editFormData, 
            [e.target.name] : e.target.value
        })
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
           <form onSubmit={handleEditShowSubmit}>
               <label>Date: </label>
               <input type="date" name="date" value={editFormData.date} onChange={handleEditShowChange}></input>
               <label>Location: </label>
               <input type="text" name="location" value={editFormData.location} onChange={handleEditShowChange}></input>
               <label>Time: </label>
               <input type="time" name="time" value={editFormData.time} onChange={handleEditShowChange}></input>
               <label>Venue: </label>
               <input type="text" name="venue" value={editFormData.venue} onChange={handleEditShowChange}></input>
               <label>Other bands: </label>
               <input type="text" name="other_bands" value={editFormData.other_bands} onChange={handleEditShowChange}></input>
               <label>Details: </label>
               <input type="text" name="details" value={editFormData.details} onChange={handleEditShowChange}></input>
               <input type="submit"></input>
            </form> 
        </div>}
      </div>
    );
  }
  
  export default SingleShow;