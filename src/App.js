import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { deepOrange } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {NotFound} from './pages/NotFound'
import {SingleCategori} from './pages/SingleCategori'
import './App.css';

function App() {
  const AppTheme = createTheme({
    palette: {
      primary: {
        main: deepOrange[500],
      },
    },
  });
  return (
    <>
      <Router>
      <ThemeProvider theme={AppTheme}>
          <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/categori/:name' component={SingleCategori}/>
              <Route component={NotFound}/>
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
