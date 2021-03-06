import React from 'react';
import { NavLink } from "react-router-dom";
import HILogo from './Hit-It-logo.png'

function NavBar({ setLoggedInUser }) {

    function handleLogout() {
        setLoggedInUser(null)
    }

    return (
      <div className='navBar'>
          <div className='logo'>
              <img className="logoImg" src={HILogo}/>
          </div>
          <ul>
            <li><NavLink to="/profile" exact>My Page</NavLink></li>
            <li><NavLink to="/venues" exact>Venues</NavLink></li>
            <li><NavLink to="/bands" exact>Bands</NavLink></li>
            <li><NavLink to="/calls" exact>Calls</NavLink></li>
            <li><NavLink to="/" exact onClick={handleLogout}>Logout</NavLink></li>
          </ul>
      </div>
    );
  }
  
  export default NavBar;

