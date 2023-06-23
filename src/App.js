import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {NotFound} from './pages/NotFound'
import {SingleCategori} from './pages/SingleCategori'
import './App.css';

function App() {

  return (
    <>
      <Router>
        <main className='container'>
          <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/categori/:name' component={SingleCategori}/>
              <Route component={NotFound}/>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
