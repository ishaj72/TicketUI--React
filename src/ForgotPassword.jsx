import { Fragment, useState } from 'react';
import axios from 'axios';
import './styles/ForgotPassword.css';

function ForgotPassword() {
  const [userEmail, setEmail] = useState('');
  const [newPassword, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://localhost:7094/api/User/ChangePassword?userEmail=${encodeURIComponent(userEmail)}&newPassword=${encodeURIComponent(newPassword)}`;

    axios.post(url)
      .then(() => {
        alert('Password Changed');
      })
      .catch((error) => {
        console.error('There was an error!', error);
        alert('There was an error changing the password.');
      });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <h2 className="headers">Forgot Password</h2>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="New Password">New Password</label>
          <input type="text" name="New Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Update Password</button>
      </form>
    </Fragment>
  );
}

export default ForgotPassword;
