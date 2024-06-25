import React, { Fragment, useState } from 'react';
import axios from 'axios';
import './styles/LoginPage.css'

function LoginPage({ onShowRegistration }) {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://localhost:7094/api/UserLogin/Login?userid=${encodeURIComponent(userid)}&password=${encodeURIComponent(password)}`;
    console.log(url);

    axios.post(url)
      .then((result) => {
        alert("You are now logged in!!");
      })
      .catch((error) => {
        console.error('There was an error!', error);
        alert('Error logging in: ' + error.message);
      });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userid">UserId</label>
          <input type="text" name="userid" onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      <div style={{ marginTop: '10px' }}>
        <p><a href="/register">Get Registered With Us!!</a></p>
        <p><a href="/forgotpassword">Forgot Password?</a></p>
        <p><a href="/adminlogin">Login as Administrator</a></p>
      </div>
    </Fragment>
  );
}

export default LoginPage;
