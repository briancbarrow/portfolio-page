import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import FontAwesome from 'react-fontawesome'
//
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div>
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/presentations">Presentations</Link>
        <Link to="https://github.com/briancbarrow"><FontAwesome name='github' /> GitHub</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
