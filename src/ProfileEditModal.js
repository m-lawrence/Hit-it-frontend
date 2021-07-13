import { React, useState } from 'react';

function ProfileEditModal({ setEditClicked, currentUser, editLoggedInUser }) {
  const [profileEditData, setProfileEditData] = useState({
    email: currentUser.email,
    password: currentUser.password,
    name: currentUser.name,
    website: currentUser.website,
    facebook: currentUser.facebook,
    music_link: currentUser.music_link,
    genre: currentUser.genre,
    location: currentUser.location,
    image: currentUser.image,
    bio: currentUser.bio,
    band_members: currentUser.band_members
  })

  function handleCloseModal() {
    setEditClicked(false)
  }

  function handleProfileEditSubmit(e) {
    e.preventDefault()

    const editedUser = {
      email: profileEditData.email,
      password: profileEditData.password,
      name: profileEditData.name,
      website: profileEditData.website,
      facebook: profileEditData.facebook,
      music_link: profileEditData.music_link,
      genre: profileEditData.genre,
      location: profileEditData.location,
      image: profileEditData.image,
      bio: profileEditData.bio,
      band_members: profileEditData.bandMembers,
      spotify: "",
      id: currentUser.id
    }

    fetch(`http://localhost:3000/band_users/${currentUser.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(editedUser)
    })
      
      editLoggedInUser(editedUser)
      setEditClicked(false)
  }

  function handleEditProfileFormChange(e) {
    setProfileEditData({...profileEditData, [e.target.name]: e.target.value})
  }

    return (
      <div className="signup-form-modal">
      <div className="signup-form-modal-content">
          <button onClick={handleCloseModal} type="button" className="btn-close" aria-label="Close"></button>
          <div className="signup-form-modal-header">
              <h4 className="signup-form-modal-title">Edit Profile</h4>
          </div>
          
          <div className="signup-form-modal-body">
              <div className="input-group">
                  <form onSubmit={handleProfileEditSubmit}>
                   <label className="signupEmailLabel">Email: </label>
                   <input className="signupNameInput" type="text" name="email" value={profileEditData.email} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="signupPasswordLabel">Password: </label>
                   <input className="signupPasswordInput" type="password" name="password" value={profileEditData.password} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="signupNameLabel">Band name: </label>
                   <input className="signupNameInput" type="text" name="name" value={profileEditData.name ? profileEditData.name : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="signupWebsiteLabel">Website: </label>
                   <input className="signupWebsiteInput" type="text" name="website" value={profileEditData.website ? profileEditData.website : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="signupFacebookLabel">Facebook: </label>
                   <input className="signupFacebookInput" type="text" name="facebook" value={profileEditData.facebook ? profileEditData.facebook : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="signupMusicLinkLabel">Music link: </label>
                   <input className="signupMusicLinkInput" type="text" name="music_link" value={profileEditData.music_link ? profileEditData.music_link : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="signupGenreLabel">Genre: </label>
                   <input className="signupGenreInput" type="text" name="genre" value={profileEditData.genre ? profileEditData.genre : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="signupLocationLabel">Location: </label>
                   <input className="signupLocationInput" type="text" name="location" value={profileEditData.location ? profileEditData.location : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="signupImageLabel">Image URL: </label>
                   <input className="signupImageInput" type="text" name="image" value={profileEditData.image ? profileEditData.image : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="signupBandMembersLabel">Band members: </label>
                   <input className="signupBandMembersInput" type="textarea" name="band_members" value={profileEditData.band_members ? profileEditData.band_members : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="signupBioLabel">Bio: </label><br></br>
                   <textarea className="signupBioInput" type="textarea" name="bio" value={profileEditData.bio ? profileEditData.bio : ""} onChange={handleEditProfileFormChange} /><br></br><br></br>
                   <button type="submit" className="bottom-btn">Submit changes</button>
               </form>
              </div>
                  
                  
          </div>

      </div>
  </div>
  
    );
  }
  
  export default ProfileEditModal;