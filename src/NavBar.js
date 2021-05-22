import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar({ setLoggedInUser }) {

    function handleLogout() {
        setLoggedInUser(null)
    }

    return (
      <div className='navBar'>
          <div className='logo'>
              <h2>Hit It</h2>
          </div>
          <ul>
            <li><NavLink to="/profile" exact>My Page</NavLink></li>
            <li><NavLink to="/venues" exact>Find a venue</NavLink></li>
            <li><NavLink to="/" exact onClick={handleLogout}>Logout</NavLink></li>
          </ul>
      </div>
    );
  }
  
  export default NavBar;

