import React from 'react';
import TourList from './TourList';

function Profile({ loggedInUser, addNewTour, tours }) {
   const currentUser = loggedInUser[0]
  
    return (
      <div className="profileMainContainer">
        <h1 className='bandProfileHeader'>{currentUser.name}</h1>
        <div className='bandProfileImgDiv'>
            <img className='bandProfileImg' src={currentUser.image} alt={currentUser.name} />
        </div>
        <div className='bandInfo'>
            <p><span className="profSpan">Email: </span>{currentUser.email}</p>
            <p><span className="profSpan">Website: </span>{currentUser.website}</p>
            <p><span className="profSpan">Facebook: </span>{currentUser.facebook}</p>
            <p><span className="profSpan">Music: </span>{currentUser.music_link}</p>
            <p><span className="profSpan">Genre: </span>{currentUser.genre}</p>
            <p><span className="profSpan">Location: </span>{currentUser.location}</p>
            <p><span className="profSpan">Band members: </span>{currentUser.band_members}</p>
            <p><span className="profSpan">Bio: </span>{currentUser.bio}</p>
        </div>
        <div className='toursHeader'>
            <h2>Our Tours</h2>
        </div>
        <div className='bandProfileTourDiv'>
            <TourList currentUser={currentUser} addNewTour={addNewTour} tours={tours}/>
        </div>
      </div>
    );
  }
  
  export default Profile;