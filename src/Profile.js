import React from 'react';

function Profile({ loggedInUser }) {
    
    return (
      <div>
        <h1 className='bandProfileHeader'>{loggedInUser[0].name}</h1>
        <div className='bandProfileImgDiv'>
            <img className='bandProfileImg' src={loggedInUser[0].image} alt={loggedInUser[0].name} />
        </div>
        <div className='bandInfo'>
            <p>Email: {loggedInUser[0].email}</p>
            <p>Website: {loggedInUser[0].website}</p>
            <p>Facebook: {loggedInUser[0].facebook}</p>
            <p>Music: {loggedInUser[0].music_link}</p>
            <p>Genre: {loggedInUser[0].genre}</p>
            <p>Location: {loggedInUser[0].location}</p>
            <p>Band members: {loggedInUser[0].band_members}</p>
            <p>Bio: {loggedInUser[0].bio}</p>
        </div>
      </div>
    );
  }
  
  export default Profile;