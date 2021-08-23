import { React, useState } from 'react';
import axios from 'axios';

function ProfileEditModal({ setEditClicked, currentUser, editLoggedInUser }) {
  const [bandImage, setBandImage] = useState(currentUser.band_image)
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

    const data = new FormData();
    data.append('file', bandImage)

    // axios.patch(`http://localhost:3000/band_users/${currentUser.id}`, data, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json'
    // },
    //   data: data
    // })
    // .then(console.log)

    const editedUser = {
      email: profileEditData.email,
      password: profileEditData.password,
      name: profileEditData.name,
      website: profileEditData.website,
      facebook: profileEditData.facebook,
      music_link: profileEditData.music_link,
      genre: profileEditData.genre,
      location: profileEditData.location,
      image: currentUser.image,
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
        .then(r => r.json())
        .then(editLoggedInUser)

    fetch(`http://localhost:3000/band_users/${currentUser.id}`, {
      method: 'POST',
      body: data
    })
        .catch(error=>console.log(error))
      
      setEditClicked(false)
  }

  function handleEditProfileFormChange(e) {
    setProfileEditData({...profileEditData, [e.target.name]: e.target.value})
  }

  function handleEditProfileImgChange(e) {
    // setBandImage(URL.createObjectURL(e.target.files[0]))
    setBandImage(e.target.files[0])
    console.log(e.target.files[0])
  }
  

    return (
      <div className="edit-profile-form-modal">
      <div className="edit-profile-form-modal-content">
          <button onClick={handleCloseModal} type="button" className="btn-close" aria-label="Close"></button>
          <div className="edit-profile-form-modal-header">
              <h4 className="edit-profile-form-modal-title">Edit Profile</h4>
          </div>
          
          <div className="edit-profile-form-modal-body">
              <div className="input-group">
                  <form onSubmit={handleProfileEditSubmit}>
                   <label className="editProfileEmailLabel">Email: </label>
                   <input className="editProfileNameInput" type="text" name="email" value={profileEditData.email} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="editProfilePasswordLabel">Password: </label>
                   <input className="editProfilePasswordInput" type="password" name="password" value={profileEditData.password} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="editProfileNameLabel">Band name: </label>
                   <input className="editProfileNameInput" type="text" name="name" value={profileEditData.name ? profileEditData.name : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="editProfileWebsiteLabel">Website: </label>
                   <input className="editProfileWebsiteInput" type="text" name="website" value={profileEditData.website ? profileEditData.website : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="editProfileFacebookLabel">Facebook: </label>
                   <input className="editProfileFacebookInput" type="text" name="facebook" value={profileEditData.facebook ? profileEditData.facebook : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="editProfileMusicLinkLabel">Music link: </label>
                   <input className="editProfileMusicLinkInput" type="text" name="music_link" value={profileEditData.music_link ? profileEditData.music_link : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="editProfileGenreLabel">Genre: </label>
                   <input className="editProfileGenreInput" type="text" name="genre" value={profileEditData.genre ? profileEditData.genre : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="editProfileLocationLabel">Location: </label>
                   <input className="editProfileLocationInput" type="text" name="location" value={profileEditData.location ? profileEditData.location : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="editProfileImageLabel">Upload image: </label>
                   <input className="editProfileImageInput" type="file" accept="image/*" multiple={false} name="image" onChange={handleEditProfileImgChange}></input><br></br><br></br>
                   {/* <label className="editProfileImageLabel">Image URL: </label>
                   <input className="editProfileImageInput" type="text" name="image" value={profileEditData.image ? profileEditData.image : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br> */}
                   <label className="editProfileBandMembersLabel">Band members: </label>
                   <input className="editProfileBandMembersInput" type="textarea" name="band_members" value={profileEditData.band_members ? profileEditData.band_members : ""} onChange={handleEditProfileFormChange}></input><br></br><br></br>
                   <label className="editProfileBioLabel">Bio: </label><br></br>
                   <textarea className="editProfileBioInput" type="textarea" name="bio" value={profileEditData.bio ? profileEditData.bio : ""} onChange={handleEditProfileFormChange} /><br></br><br></br>
                   <button type="submit" className="bottom-btn">Submit changes</button>
               </form>
              </div>
                  
                  
          </div>

      </div>
  </div>
  
    );
  }
  
  export default ProfileEditModal;