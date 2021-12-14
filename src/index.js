import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './style-global/globalStyle.jsx'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
