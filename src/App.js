import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Login from './Login'
import Profile from './Profile'
import Venues from './Venues'
import TourDetails from './TourDetails'
import Calls from './Calls';


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [bands, setBands] = useState([])
  const [venues, setVenues] = useState([])
  const [search, setSearch] = useState("")
  const [searchText, setSearchText] = useState("asheville")
  const [tours, setTours] = useState([])
  const [selectedVenueCategory, setSelectedVenueCategory] = useState("All")
  const [calls, setCalls] = useState([])
  const [mapCoordinates, setMapCoordinates] = useState([35.58884248434797, -82.56472777557953])


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

  useEffect(() => {
    fetch('http://localhost:3000/calls')
      .then(res => res.json())
      .then(setCalls)
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

  function addNewCall(callObj) {
    setCalls([...calls, callObj])
  }

  

  return (
    <div className="bigContainer">
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
          {loggedInUser && <Venues setSearchText={setSearchText} searchText={searchText} venues={filteredByCatVenues} setSearch={setSearch} search={search} setSelectedVenueCategory={setSelectedVenueCategory} setMapCoordinates={setMapCoordinates} mapCoordinates={mapCoordinates} />}
          </Route>
          <Route exact path='/calls'>
          {loggedInUser && <Calls calls={calls} loggedInUser={loggedInUser} addNewCall={addNewCall} bands={bands}/>}
          </Route>
        </div>
      </Switch>
    </div>
  );
}

export default App;
