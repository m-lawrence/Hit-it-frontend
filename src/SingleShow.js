import React from 'react';

function SingleShow({ show }) {
    
    return (
      <div>
        <p>{show.date}</p>
        <p>{show.location}</p>
        <p>{show.venue}</p>
      </div>
    );
  }
  
  export default SingleShow;