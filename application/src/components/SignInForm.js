import React, { useEffect, useState } from 'react';
import axios from "axios"

function SignInForm() {
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
    axios()
      .post("localhost:4000/api/login", login)
      .then(res => {
        console.log(res)
        //props.history.push('/profile');
      })
    setLogin({username: "", password: ""})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChanges}
            // value={userLogin.username}
        />
        <input 
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChanges}
            // value={userLogin.password}
        />
        <button type="submit" >Let's Go!</button>  
      </form> 
    </div>
  );
}

export default SignInForm;