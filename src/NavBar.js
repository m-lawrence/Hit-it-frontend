import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar({ setLoggedInUser }) {

    function handleLogout() {
        setLoggedInUser(null)
    }

    return (
      <div>
        <NavLink to="/profile" exact>My Page</NavLink>
        <NavLink to="/venues" exact>Find a venue</NavLink>
        <NavLink to="/" exact onClick={handleLogout}>Logout</NavLink>
      </div>
    );
  }
  
  export default NavBar;