import React, { useState } from 'react';
import { useLocation} from 'react-router-dom'
import SingleShow from './SingleShow';

function TourDetails({ venues }) {
  const location = useLocation()
  const [addShowClicked, setAddShowClicked] = useState(false)

  const showsArr = location.state.params.shows.map(show => {
    return <SingleShow key={show.id} show={show} venue={venues.filter(venue => {
      return venue.id === show.venue_id
    })}/>
  })

  function handleAddShowClick() {
    setAddShowClicked(addShowClicked => !addShowClicked)
  }
  
    return (
      <div>
        <h1>{location.state.params.name}</h1>
        <img src={location.state.params.image} alt={location.state.params.name}/>
        {showsArr}
        <div onClick={handleAddShowClick}>
            <h4>Add a show!</h4>
        </div>
        {addShowClicked && 
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
  
  export default TourDetails;