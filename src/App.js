import React, { useState } from 'react'
import './App.css';


function App() {
  const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  function ValidateForm() {
    let result = document.getElementById('subForm');
    if (userInfo.name && userInfo.email && userInfo.password && userInfo.confirmPassword) {
      if (!userInfo.email.includes('@')) {
        result.innerHTML = "Enter vaild Email Id"
        result.classList.add('red')
        return;
      }
      if (userInfo.password !== userInfo.confirmPassword) {
        result.innerHTML = "password doesn't match "
        result.classList.add('red')
        return;
      }
      result.innerHTML = "Successfully Signed Up!!!"
      result.classList.remove('red')
      result.classList.add('green')
    }
    else {
      result.innerHTML = "error>>> All the fields are mandatory"
      result.classList.add('red')
    }
  }

  return (
    <div className='component'>
      <h1>Signup</h1>
      <input placeholder='Full Name' required
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} />

      <input type='email' placeholder='Email' required
        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />

      <input placeholder='Password' required
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} />

      <input type='password' placeholder='Confirm Password' required
        onChange={(e) => setUserInfo({ ...userInfo, confirmPassword: e.target.value })} />

      <p id='subForm'></p>
      <button onClick={ValidateForm}>Signup</button>
    </div>
  );
}

export default App;


