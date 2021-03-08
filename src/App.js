import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/about' component={About}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
