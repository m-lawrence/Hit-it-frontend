import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Login from './Login'
import Profile from './Profile'
import Venues from './Venues'
import TourDetails from './TourDetails'


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [bands, setBands] = useState([])
  const [venues, setVenues] = useState([])
  const [search, setSearch] = useState("")
  const [searchText, setSearchText] = useState("")
  const [tours, setTours] = useState([])
  const [selectedVenueCategory, setSelectedVenueCategory] = useState("All")
 
  useEffect(() => {
    fetch('http://localhost:3000/band_users')
      .then(res => res.json())
      .then(setBands)
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/venues')
      .then(res => res.json())
      .then(setVenues)
  }, [])


 
    const filteredVenues = venues.filter(venue => {
      if (venue.location.toLowerCase().includes(searchText.toLowerCase())) {
        return venue
      }
    })

    const filteredByCatVenues = filteredVenues.filter(venue => {
      if (venue.category === selectedVenueCategory) {
        return venue
      } else if (selectedVenueCategory === "All")
        return venue
    })


  function addNewTour(tourObj) {
    setTours([...tours, tourObj])
  }

  return (
    <div>
      {loggedInUser && <NavBar setLoggedInUser={setLoggedInUser}/>}
      {!loggedInUser ? <Login setLoggedInUser={setLoggedInUser} bands={bands} setTours={setTours}/> : null}
      <Switch>
        <div className='mainContainer'>
          <Route exact path='/profile'>
          {loggedInUser && <Profile loggedInUser={loggedInUser} addNewTour={addNewTour} tours={tours}/>}
          </Route>
          <Route exact path='/tours/:id'>
          {loggedInUser && <TourDetails venues={venues} />}
          </Route>
          <Route exact path='/venues'>
          {loggedInUser && <Venues setSearchText={setSearchText} venues={filteredByCatVenues} setSearch={setSearch} search={search} setSelectedVenueCategory={setSelectedVenueCategory}/>}
          </Route>
        </div>
      </Switch>
    </div>
  );
}

export default App;
