import React, { Fragment, useState } from 'react';
import axios from 'axios';
import './styles/LoginPage.css'

function AdminLoginPage({ onShowRegistration }) {
  const [id, setAdminId] = useState('');
  const [name, setAdminName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://localhost:7094/api/AdminLogin/Admin?id=${encodeURIComponent(id)}&name=${encodeURIComponent(name)}&password=${encodeURIComponent(password)}`;

    axios.post(url)
      .then((result) => {
        alert(`Logging in ${name} as administrator`)
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
          <label htmlFor="adminId">Admin Id</label>
          <input type="text" name="adminId" onChange={(e) => setAdminId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="adminName">Admin Name</label>
          <input type="text" name="adminName" onChange={(e) => setAdminName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </Fragment>
  );
}

export default AdminLoginPage;