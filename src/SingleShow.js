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

    function handleCloseEditModal() {
        setShowEditClicked(false)
    }
  
    return (
      <div className="showCard">
        <p>{moment(show.date).format("MM-DD-YY")}</p>
        <p>{show.location}</p>
        <p>{moment(show.time).format("LT")}</p>
        <p>{venue[0].name}</p>
        <button className="moreLessBtn" onClick={handleShowClick}>{showClicked ? '-' : '+'}</button><br></br><br></br>
        {showClicked &&
         <div>
           <p><span>With: </span>{show.other_bands}</p>
           <p><span>Details: </span>{show.details}</p>
           <button className="showCardBtn" onClick={handleShowEditClick}>Edit</button>
           <button className="showCardBtn" onClick={handleShowDeleteClick}>Delete</button>
         </div>}
         {showEditClicked && showClicked &&
         <div>
            <div className="edit-show-form-modal">
            <div className="edit-show-form-modal-content">
                <button onClick={handleCloseEditModal} type="button" className="btn-close" aria-label="Close"></button>
                <div className="edit-show-form-modal-header">
                    <h4 className="edit-show-form-modal-title">Edit show</h4>
                </div>
                <div className="edit-show-form-modal-body">
                    <div className="input-group">
                        <form onSubmit={handleEditShowSubmit}>
                            <label className="dateLabel">Date: </label>
                            <input type="date" name="date" value={editFormData.date} onChange={handleEditShowChange}></input><br></br><br></br>
                            <label className="timeLabel">Time: </label>
                            <input className="timeInput" type="time" name="time" value={editFormData.time} onChange={handleEditShowChange}></input><br></br><br></br>
                            <label className="locationLabel">Location: </label>
                            <input type="text" name="location" value={editFormData.location} onChange={handleEditShowChange}></input><br></br><br></br>
                            <label className="venueLabel">Venue: </label>
                            <input type="text" name="venue" value={editedVenue} onChange={handleEditVenueChange}></input><br></br><br></br>
                            <label className="bandsLabel">Other bands: </label>
                            <input type="text" name="other_bands" value={editFormData.other_bands} onChange={handleEditShowChange}></input><br></br><br></br>
                            <label className="moreInfoLabel">Details: </label>
                            <input type="text" name="details" value={editFormData.details} onChange={handleEditShowChange}></input><br></br>
                            <button type="submit" className="bottom-btn">Edit</button>
                        </form> 
                    </div>
                </div>
            </div>
            </div>
        </div>}
      </div>
    );
  }
  
  export default SingleShow;