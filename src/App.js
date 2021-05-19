import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import NavBar from './NavBar'
import Login from './Login'
import Profile from './Profile'
import Venues from './Venues'

function App() {
  return (
    <div>
      <NavBar />
      <Login />
      <Switch>
        <Route exact path='/profile'>
         <Profile />
        </Route>
        <Route>
         <Venues exact path='/venues'/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
