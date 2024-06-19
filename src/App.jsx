import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import Registration from './Registration';
import LoginPage from './LoginPage';
import AdminLoginPage from './AdminLoginPage';

function App() {
  return (
    <Routes>
      <Route path = "/register" element={<Registration/>}/>
      <Route path = "/login" element={<LoginPage/>}/>
      <Route path = "/adminlogin" element={<AdminLoginPage/>}/>
    </Routes>
  );
}

export default App;
