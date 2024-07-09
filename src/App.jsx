import { Route, Routes,useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Registration from './Registration';
import LoginPage from './LoginPage';
import AdminLoginPage from './AdminLoginPage';
import AddTrains from './AddTrains';
import ForgotPassword from './ForgotPassword';
import UpdateTrains from './UpdateTrains';
import AddDeleteSeat from './AddDeleteSeat';
import ManageUserPage from './ManageUserPage';
import Reservation from './Reservation';
import Sidebar from './Sidebar';
import Cancellation from './Cancellation';
import LogoPage from './LogoPage';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect to login page after 3 seconds only if transitioning from LogoPage
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        navigate('/login');
      }, 3000); // 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route path="/" element={<LogoPage />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/adminlogin" element={<AdminLoginPage />} />
      <Route path="/addtrains" element={<AddTrains />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/update-train/:trainNumber" element={<UpdateTrains />} />
      <Route path="/manage-seats/:trainNumber" element={<AddDeleteSeat />} />
      <Route path="/manageUserPage" element={<ManageUserPage />} />
      <Route path="/reservation/:trainNumber/:seatType" element={<Reservation />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/cancelticket" element={<Cancellation />} />
    </Routes>
  );
}

export default App;
