import React, { useState } from 'react';
import moment from 'moment'

function SingleShow({ show, venue, removeShow, updateShow, venues }) {
    const [showClicked, setShowClicked] = useState(false)
    const [showEditClicked, setShowEditClicked] = useState(false)
    const [editedVenue, setEditedVenue] = useState("")
    const [editedVenueId, setEditedVenueID] = useState(venue)
    const [editFormData, setEditFormData] = useState({
        date: show.date,
        location: show.location,
        time: show.time,
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
            venue_id: editedVenueId ? editedVenueId : 1
        }

        fetch(`http://localhost:3000/shows/${show.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedShow)
        })
            .then(r => r.json())
            .then(updateShow)
    
            setShowEditClicked(false)
        //    const readyShow = {...updatedShow, id: show.id}
        //    updateShow(readyShow)
    }

    function handleEditShowChange(e) {
        setEditFormData({...editFormData, 
            [e.target.name] : e.target.value
        })
    }

    function handleEditVenueChange(e) {
        setEditedVenue(e.target.value)
        getEditedVenueId()
    }

    function getEditedVenueId() {
        const theVenue = venues.filter(venue => {
            return venue.name.toLowerCase().includes(editedVenue.toLowerCase()) 
          })
            setEditedVenueID(theVenue[0].id)
    }
  
    return (
      <div className="showCard">
        <p>{moment(show.date).format("MM-DD-YY")}</p>
        <p>{show.location}</p>
        <p>{moment(show.time).format("LT")}</p>
        <p>{venue[0].name}</p>
        <button onClick={handleShowClick}>{showClicked ? '➖' : '➕'}</button>
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
               <input type="text" name="venue" value={editedVenue} onChange={handleEditVenueChange}></input>
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