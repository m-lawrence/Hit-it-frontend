import React from 'react';

function SingleBand({ band}) {
   
    return (
        <div className="bandCard">
            <p>{band.name}</p>
            <p>{band.location}</p>
            <p>{band.genre}</p>
            <img src={band.image} alt={band.name} />
      </div>
    );
  }
  
  export default SingleBand;