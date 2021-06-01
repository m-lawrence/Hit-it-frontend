import React from 'react';
import TourList from './TourList';

function Profile({ loggedInUser, addNewTour, tours }) {
   const currentUser = loggedInUser[0]
  
    return (
      <div className="profileMainContainer">
        <h1 className='bandProfileHeader'>{currentUser.name}</h1>
        <div className="bandInfoDiv">
            <div className='bandProfileImgDiv'>
                <img className='bandProfileImg' src={currentUser.image} alt={currentUser.name} />
            </div>
            <div className='bandInfo'>
                <p><span className="profSpan">Email: </span>{currentUser.email}</p>
                {currentUser.website && <p><span className="profSpan">Website: </span>{currentUser.website}</p>}
                {currentUser.facebook && <p><span className="profSpan">Facebook: </span>{currentUser.facebook}</p>}
                {currentUser.music_link && <p><span className="profSpan">Music: </span>{currentUser.music_link}</p>}
                {currentUser.genre && <p><span className="profSpan">Genre: </span>{currentUser.genre}</p>}
               {currentUser.location && <p><span className="profSpan">Location: </span>{currentUser.location}</p>}
                {currentUser.band_members && <p><span className="profSpan">Band members: </span>{currentUser.band_members}</p>}
                {currentUser.bio && <p><span className="profSpan">Bio: </span>{currentUser.bio}</p>}
            </div>
        </div>
        <div className='toursHeaderDiv'>
            <h2 className='toursHeader'>Our Tours</h2>
        </div>
        <div className='bandProfileTourDiv'>
            <TourList currentUser={currentUser} addNewTour={addNewTour} tours={tours}/>
        </div>
      </div>
    );
  }
  
  export default Profile;