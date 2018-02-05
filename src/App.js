import React, { Component } from 'react';
import './App.css';
import 'animate.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/home'
import Navbar from './components/navbar'
import Realtime from './components/realtime'
import Users from './components/users'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/realtime/reactshow" component={Realtime}/>
          <Route exact path="/reactcontrol" component={Users}/>

        </div>
      </Router>

    );
  }
}

export default App;
