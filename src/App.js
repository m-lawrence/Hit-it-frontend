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



  return (
    <div>
      {loggedInUser && <NavBar setLoggedInUser={setLoggedInUser}/>}
      {!loggedInUser ? <Login setLoggedInUser={setLoggedInUser} bands={bands}/> : null}
      <Switch>
        <Route exact path='/profile'>
         {loggedInUser && <Profile loggedInUser={loggedInUser}/>}
        </Route>
        <Route exact path='/tours/:id'>
         {loggedInUser && <TourDetails />}
        </Route>
        <Route exact path='/venues'>
         {loggedInUser && <Venues setSearchText={setSearchText} venues={filteredVenues} setSearch={setSearch} search={search}/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
