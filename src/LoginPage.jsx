import { Fragment, useState } from 'react';
import axios from 'axios';
import './styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://localhost:7094/api/UserLogin/Login?userid=${encodeURIComponent(userid)}&password=${encodeURIComponent(password)}`;
    console.log(url);

    axios.post(url)
      .then((result) => {
        alert("You are now logged in!!");
        const token = result.data;
        localStorage.setItem('userToken', token);
        navigate('/manageUserPage');
      })
      .catch((error) => {
        console.error('There was an error!', error);
        alert('Error logging in: ' + error.message);
      });
  };

  return (
    <div>
      <div className='headers'>
        <h1>LogIn</h1>
      </div>
      <Fragment>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="userid" className="label">UserId</label>
          <input type="text" name="userid" onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label" >Password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className='extra'>
          <div className="links">
            <p><a href="/register">Register</a></p>
            <span>|</span>
            <p><a href="/forgotpassword">Forgot Password?</a></p>
            <span>|</span>
            <p><a href="/adminlogin">Admin Login</a></p>
          </div>
        </div>
    </Fragment>
    </div>
  );
}

export default LoginPage;
