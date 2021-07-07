import { React, useState } from 'react';

function SignupModal({ setSigningUp }) {
  const [signUpData, setSignUpData] = useState({
    newEmail: "",
    newPassword: "",
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
  }

  function handleSignUpFormChange() {

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
                   <input className="signupNameInput" type="text" name="email" value={signUpData.newEmail} onChange={handleSignUpFormChange}></input><br></br><br></br><br></br>
                   <label className="signupPasswordLabel">Password: </label>
                   <input className="signupPasswordInput" type="text" name="password" value={signUpData.newPassword} onChange={handleSignUpFormChange}></input><br></br><br></br><br></br>
                   <button type="submit" className="bottom-btn">Sign up!</button>
               </form>
              </div>
                  
                  
          </div>

      </div>
  </div>
  
    );
  }
  
  export default SignupModal;