import React, { useEffect, useState } from 'react';
import axios from "axios"

import '../App.css';

function SignInForm(props) {
  const [login, setLogin] = useState({})
  useEffect(() => {

  }, [])

  const handleChanges = (e) => {
    e.preventDefault();
    setLogin({ ...login, [e.target.name ] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(login)
    axios
      .post("http://localhost:4000/api/login", login)
      .then(res => {
        console.log(res)
        props.history.push('/profile');
      })
    setLogin({username: "", password: ""})
  }

  return (
    <div className="signInContainer">
      <h1>Welcome to FarmerLand!</h1>
      <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChanges}
            value={login.username}
        />
        <input 
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChanges}
            value={login.password}
        />
        <button type="submit" >Let's Go!</button>  
      </form> 
    </div>
  );
}

export default SignInForm;