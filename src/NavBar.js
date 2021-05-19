import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <div>
        <NavLink to="/profile" exact>My Page</NavLink>
        <NavLink to="/venues" exact>Find a venue</NavLink>
      </div>
    );
  }
  
  export default NavBar;