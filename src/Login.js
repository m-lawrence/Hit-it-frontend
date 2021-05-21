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
      <div id="loginDiv">
        Login
        <form onSubmit={handleLoginSubmit}>
            <label>email: </label>
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <label>password: </label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
  export default Login;