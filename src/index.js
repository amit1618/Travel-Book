import React from 'react'
import ReactDOM from 'react-dom'
import 'jquery/src/jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import NavBar from './components/navbar/navbar.js'
import HomePage from './components/homepage/homepage.js'
import Place from './components/places/place.js'
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css'
import 'react-image-gallery/styles/css/image-gallery.css'

ReactDOM.render(<NavBar />, document.getElementById('navbar'))
ReactDOM.render(
 <Router history>
    <div>
        <Route exact  path="/" component={HomePage} />
        <Route path="/places" component={Place} />
    </div>
  </Router>,
  document.getElementById('content'))
registerServiceWorker()
