import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './App';

// Router Module
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />  
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
