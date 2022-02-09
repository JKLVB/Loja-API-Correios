import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    
    <div className="Logo">
      <img src="https://img.pngio.com/pin-by-karan-wings-on-chennai-business-pigeon-logo-bird-logos-church-logo-png-1171_1069.png" width='170px' height='170px' alt='logo' />
        <h2>BLUE BIRD</h2>
      </div>

      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);