import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./components/Header"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Error from "./components/Error"

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <div className="container">
              <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/contact" component={Contact} />
                  <Route path="/about" component={About} />
                  <Route component={Error} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
