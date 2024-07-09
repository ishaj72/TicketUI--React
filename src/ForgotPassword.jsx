import { Fragment, useState } from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [userEmail, setEmail] = useState('');
  const [newPassword, setPassword] = useState('');
  //const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://localhost:7094/api/User/ChangePassword?userEmail=${encodeURIComponent(userEmail)}&newPassword=${encodeURIComponent(newPassword)}`;

    axios.post(url)
      .then(() => {
        alert(`Password Changed`);
        //const token = result.data;
        //navigate('/addtrains');
      })
      .catch((error) => {
        console.error('There was an error!', error);
        alert('Password Changed');
      });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="New Password">Password</label>
          <input type="text" name="New Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Update Password</button>
      </form>
    </Fragment>
  );
}

export default ForgotPassword;
