import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
