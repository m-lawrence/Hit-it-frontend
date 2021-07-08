import React, { useState  } from 'react';
import { useHistory } from 'react-router-dom';
import HILogo from './Hit-It-logo.png'
import SignupModal from './SignupModal';

function Login({ setLoggedInUser, bands, setTours, addNewBand }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    const [signingUp, setSigningUp] = useState(false)

    function handleLoginSubmit(e) {
        e.preventDefault()

        const theUser = bands.filter(band => {
           return (band.email === email) && (band.password === password)
        })
      
        setLoggedInUser(theUser)
        setTours(theUser[0].tours)
        history.push('./profile')
    }

    function handleSignUpClick(e) {
        e.preventDefault()
        setSigningUp(signingUp => !signingUp)
    }

    return (
      <div className="loginContainer">
        <div className='box'>
            <h1><img className="loginLogo" src={HILogo} /></h1>
            <form onSubmit={handleLoginSubmit}>
                <div className='loginRow'>
                    <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='loginRow'>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className='loginRow'>
                    <button type="submit" id='login'>Login</button>
                </div>
            </form>
            <div class="loginRow">
                <a href="" onClick={handleSignUpClick}>Sign Up</a>
           </div> 
           {signingUp
            &&
            <SignupModal setSigningUp={setSigningUp} addNewBand={addNewBand}/>}
            {/* <div class="loginRow">
//              <a href="#">Forget Password</a>
//          </div>  */}
        </div>
      </div>
    );
  }
  
  export default Login;


