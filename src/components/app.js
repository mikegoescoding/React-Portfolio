import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';

import PortfolioContainer from '../portfolio/portfolio-container';
import NavigationContainer from "./navigation/navigation-container"
import Home from "./pages/home"
import About from "./pages/about"
import ContactContainer from './contact';

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
            </Switch>

          </div>
        </Router>

        <h1>Michael Di Dia's React Portfolio</h1>
        <div>
          <h3>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
       </div>
        <br /><br />
        <PortfolioContainer />
        <br /><br /><br /><br />
        <ContactContainer />

      </div>
    );
  }
}
