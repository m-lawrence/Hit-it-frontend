import React, { useState } from 'react';
import { useLocation} from 'react-router-dom'
import SingleShow from './SingleShow';

function TourDetails({ venues }) {
  const location = useLocation()
  const [addShowClicked, setAddShowClicked] = useState(false)
  const [shows, setShows] = useState([])
  const [formData, setFormData] = useState({
    date:"",
    location:"",
    time:"",
    venue:"",
    other_bands:"",
    details:""
})

  const showsArr = location.state.params.shows.map(show => {
    return <SingleShow key={show.id} show={show} removeShow={removeShow} updateShow={updateShow} venue={venues.filter(venue => {
      return venue.id === show.venue_id
    })}/>
  })
  
  function handleAddShowClick() {
    setAddShowClicked(addShowClicked => !addShowClicked)
  }

  function handleChange(e) {
    setFormData({...formData, 
      [e.target.name] : e.target.value
  })

  }

  function handleNewShowSubmit(e) {
    e.preventDefault()


    const newShow = {
      date:formData.date,
      location:formData.location,
      time:formData.time,
      venue:formData.venue,
      other_bands:formData.other_bands,
      details:formData.details,
      tour_id: location.state.params.id,
      venue_id: 1
    }

    fetch('http://localhost:3000/shows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newShow)
    })
        .then(res => res.json())
        .then(addNewShow)
    
  }

  function addNewShow(showObj) {
    const moreShows= location.state.params.shows.push(showObj)
    setShows(moreShows)
  }

  function removeShow(id) {
    location.state.params.shows = location.state.params.shows.filter(show => {
      if (show.id !== id) {
        return show
      }
    })
    setShows(location.state.params.shows)
  }

  function updateShow(newShow) {
    const editedShows = location.state.params.shows.map(show => {
      if (show.id === newShow.id) {
        return newShow
      } else {
      return show
      }
    })
    location.state.params.shows = editedShows
    setShows(location.state.params.shows)
  
  }
 
  
    return (
      <div className="tourDeetsContainer">
        <h1>{location.state.params.name}</h1>
        <img src={location.state.params.image} alt={location.state.params.name}/>
        <div className='tourDeetsShowsDiv'>
          {showsArr}
          <div className="showCard" onClick={handleAddShowClick}>
              <h4>+ Add a show!</h4>
          </div>
          {addShowClicked && 
          <div>
            <form onSubmit={handleNewShowSubmit}>
              <label>Date: </label>
              <input type="date" value={formData.date} name="date" onChange={handleChange}></input>
              <label>Location: </label>
                <input type="text" value={formData.location} name="location" onChange={handleChange}></input>
                <label>Time: </label>
                <input type="time" value={formData.time} name="time" onChange={handleChange}></input>
                <label>Venue: </label>
                <input type="text" value={formData.venue} name="venue" onChange={handleChange}></input>
                <label>Other bands: </label>
                <input type="text" value={formData.other_bands} name="other_bands" onChange={handleChange}></input>
                <label>Details: </label>
                <input type="text" value={formData.details} name="details" onChange={handleChange}></input>
                <input type="submit"></input>
            </form>
          </div>}
        </div>
      </div>
    );
  }
  
  export default TourDetails;