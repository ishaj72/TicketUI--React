import React, { useState } from 'react';
import './Registeration.css';
import Registration from './Registration';
import LoginPage from './LoginPage';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleShowRegistration = () => {
    setShowLogin(false);
    setShowRegistration(true);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegistration(false);
  };

  return (
    <div className='app'>
      <header className='app-header'>
        <div className='left'>
          <h1>Ticketify</h1>
          {showLogin && <LoginPage onShowRegistration={handleShowRegistration} />}
          {showRegistration && <Registration onShowLogin={handleShowLogin} />}
        </div>
        <div className='right'>
          <div className='overlay'>
            <p className='overlay-text'>Welcome<br />Get yourself registered with us</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
