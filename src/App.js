import React from 'react'
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
