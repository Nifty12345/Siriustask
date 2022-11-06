import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Profile from './views/profile'
import Frame from './views/frame'
import Frame1 from './views/frame1'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Frame} exact path="/" />
        <Route component={Frame1} exact path="/reg" />
        <Route component={Profile} exact path="/profile" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
