import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './App';
import Platform from './Platform';
import Login from './Login';

// Router Module
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/wallet" component={Platform} />
      <Route exact path="/login" component={Login} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
