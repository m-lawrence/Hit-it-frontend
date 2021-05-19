import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import NavBar from './NavBar'
import Login from './Login'
import Profile from './Profile'
import Venues from './Venues'

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [bands, setBands] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/band_users')
      .then(res => res.json())
      .then(setBands)
  }, [])
  

  return (
    <div>
      {loggedInUser && <NavBar setLoggedInUser={setLoggedInUser}/>}
      {!loggedInUser ? <Login setLoggedInUser={setLoggedInUser} bands={bands}/> : null}
      <Switch>
        <Route exact path='/profile'>
         {loggedInUser && <Profile loggedInUser={loggedInUser}/>}
        </Route>
        <Route>
         {loggedInUser && <Venues exact path='/venues'/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
