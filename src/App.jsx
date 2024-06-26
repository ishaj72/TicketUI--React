import {Route, Routes} from 'react-router-dom'
import Registration from './Registration';
import LoginPage from './LoginPage';
import AdminLoginPage from './AdminLoginPage';
import AddTrains from './AddTrains';
import ForgotPassword from './ForgotPassword';
import UpdateTrains from './UpdateTrains';
import AddDeleteSeat from './AddDeleteSeat';

function App() {
  return (
    <Routes>
      <Route path = "/register" element={<Registration/>}/>
      <Route path = "/login" element={<LoginPage/>}/>
      <Route path = "/adminlogin" element={<AdminLoginPage/>}/>
      <Route path = "/addtrains" element={<AddTrains/>}/>
      <Route path = "/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/update-train/:trainNumber" element={<UpdateTrains/>} />
      <Route path="/manage-seats/:trainNumber" element={<AddDeleteSeat />} />
    </Routes>
  );
}
export default App;