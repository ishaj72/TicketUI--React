import { Link } from 'react-router-dom';
import './styles/Sidebar.css';

function Sidebar () {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search Trains</Link></li>
        <li><Link to="/reservations">My Reservations</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;