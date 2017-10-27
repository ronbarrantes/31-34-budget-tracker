import './_app.scss'
import React from 'react'
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom'

import Landing from '../landing'
import Dashboard from '../dashboard'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <nav>
                <h1><Link to='/'>Budget Tracker</Link></h1>
                <ul>
                  <li><Link to='/'>home</Link></li>
                  <li><Link to='/dashboard'>dashboard</Link></li>
                </ul>
              </nav>
            </header>
            <main>
              <Route exact path='/' component={Landing} />
              <Route exact path='/dashboard' component={Dashboard} />
            </main>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
