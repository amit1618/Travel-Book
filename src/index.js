import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar/navbar.js';
import HomePage from './components/homepage/homepage.js';
import registerServiceWorker from './registerServiceWorker';
import './app.css'

ReactDOM.render(<NavBar />, document.getElementById('navbar'));
ReactDOM.render(<HomePage />, document.getElementById('mainContent'));
registerServiceWorker();
