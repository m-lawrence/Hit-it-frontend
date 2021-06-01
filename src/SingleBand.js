import React from 'react';
import { Link } from "react-router-dom";

function SingleBand({ band}) {
    
    return (
        <div className="bandCard">
            <p>{band.name}</p>
            <p>{band.location}</p>
            <p>{band.genre}</p>
            <img src={band.image} alt={band.name} />
            <Link to={`bands/${band.id}`}>{band.name}</Link>
      </div>
    );
  }
  
  export default SingleBand;