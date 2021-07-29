import { React, useState } from 'react';

function SignupModal({ setSigningUp, addNewBand }) {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    name: "",
    website: "",
    facebook: "",
    music_link: "",
    genre: "",
    location: "",
    image: "",
    bio: "",
    bandMembers: ""
  })

  function handleClosingModal() {
    setSigningUp(false)
  }

  function handleSignUpSubmit(e) {
    e.preventDefault()

    const newUser = {
      email: signUpData.email,
      password: signUpData.password,
      name: signUpData.name,
      website: signUpData.website,
      facebook: signUpData.facebook,
      music_link: signUpData.music_link,
      genre: signUpData.genre,
      location: signUpData.location,
      image: signUpData.image,
      bio: signUpData.bio,
      band_members: signUpData.bandMembers
    }

    fetch('http://localhost:3000/band_users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(newUser)
    })
      .then(r => r.json())
      .then(addNewBand)

      setSigningUp(false)
  }

  function handleSignUpFormChange(e) {
    setSignUpData({...signUpData, [e.target.name]: e.target.value})
  }

    return (
      <div className="signup-form-modal">
      <div className="signup-form-modal-content">
          <button onClick={handleClosingModal} type="button" className="btn-close" aria-label="Close"></button>
          <div className="signup-form-modal-header">
              <h4 className="signup-form-modal-title">Create an Account</h4>
          </div>
          
          <div className="signup-form-modal-body">
              <div className="input-group">
                  <form onSubmit={handleSignUpSubmit}>
                   <label className="signupEmailLabel">Email: </label>
                   <input className="signupNameInput" type="text" name="email" value={signUpData.email} onChange={handleSignUpFormChange}></input><br></br><br></br>
                   <label className="signupPasswordLabel">Password: </label>
                   <input className="signupPasswordInput" type="password" name="password" value={signUpData.password} onChange={handleSignUpFormChange}></input><br></br><br></br>
                   <label className="signupNameLabel">Band name: </label>
                   <input className="signupNameInput" type="text" name="name" value={signUpData.name} onChange={handleSignUpFormChange}></input><br></br><br></br>
                   <label className="signupWebsiteLabel">Website: </label>
                   <input className="signupWebsiteInput" type="text" name="website" value={signUpData.website} onChange={handleSignUpFormChange}></input><br></br><br></br>
                   <label className="signupFacebookLabel">Facebook: </label>
                   <input className="signupFacebookInput" type="text" name="facebook" value={signUpData.facebook} onChange={handleSignUpFormChange}></input><br></br><br></br>
                   <label className="signupMusicLinkLabel">Music link: </label>
                   <input className="signupMusicLinkInput" type="text" name="music_link" value={signUpData.music_link} onChange={handleSignUpFormChange}></input><br></br><br></br>
                   <label className="signupGenreLabel">Genre: </label>
                   <input className="signupGenreInput" type="text" name="genre" value={signUpData.genre} onChange={handleSignUpFormChange}></input><br></br><br></br>
                   <label className="signupLocationLabel">Location: </label>
                   <input className="signupLocationInput" type="text" name="location" value={signUpData.location} onChange={handleSignUpFormChange}></input><br></br><br></br>
                   {/* <label className="signupImageLabel">Image URL: </label>
                   <input className="signupImageInput" type="text" name="image" value={signUpData.image} onChange={handleSignUpFormChange}></input><br></br><br></br> */}
                   <label className="signupImageLabel">Upload Image: </label>
                   <input className="signupImageInput" type="file" name="image" value={signUpData.image} onChange={handleSignUpFormChange}></input><br></br><br></br>
                   <label className="signupBandMembersLabel">Band members: </label>
                   <input className="signupBandMembersInput" type="textarea" name="band_members" value={signUpData.band_members} onChange={handleSignUpFormChange}></input><br></br><br></br>
                   <label className="signupBioLabel">Bio: </label><br></br>
                   <textarea className="signupBioInput" type="textarea" name="bio" value={signUpData.bio} onChange={handleSignUpFormChange} /><br></br><br></br>
                   <button type="submit" className="bottom-btn">Sign up!</button>
               </form>
              </div>
                  
                  
          </div>

      </div>
  </div>
  
    );
  }
  
  export default SignupModal;