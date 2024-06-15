import './Registeration.css'
import Registration from './Registration'

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <div className='left'>
          <h1>Ticketify</h1>
          <Registration />
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

export default App
