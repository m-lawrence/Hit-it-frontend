import React from 'react';
import { useHistory } from 'react-router-dom';

function SingleBand({ band }) {
    const history = useHistory()

    function handleBandClick() {
        history.push(`bands/${band.id}`, {params: band})
    }
    
    return (
        <div className="bandCard">
            <p>{band.name}</p>
            <p>{band.location}</p>
            <p>{band.genre}</p>
            <img src={band.image} alt={band.name} /><br></br>
            <button className="bandLinkButton" onClick={handleBandClick}>Band page</button>
      </div>
    );
  }
  
  export default SingleBand;