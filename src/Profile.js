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
            <p>Email: {currentUser.email}</p>
            <p>Website: {currentUser.website}</p>
            <p>Facebook: {currentUser.facebook}</p>
            <p>Music: {currentUser.music_link}</p>
            <p>Genre: {currentUser.genre}</p>
            <p>Location: {currentUser.location}</p>
            <p>Band members: {currentUser.band_members}</p>
            <p>Bio: {currentUser.bio}</p>
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