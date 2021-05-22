import React, { useState  } from 'react';
import { useHistory } from 'react-router-dom';

function Login({ setLoggedInUser, bands, setTours }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    function handleLoginSubmit(e) {
        e.preventDefault()

        const theUser = bands.filter(band => {
           return (band.email === email) && (band.password === password)
        })
      
        setLoggedInUser(theUser)
        setTours(theUser[0].tours)
        history.push('./profile')
    }

    return (
      <div className="loginContainer">
        <div className='box'>
            <h1>Sign in</h1>
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
            {/* <div class="loginRow">
//              <a href="#">Forget Password</a>
//          </div>  */}
        </div>
      </div>
    );
  }
  
  export default Login;


