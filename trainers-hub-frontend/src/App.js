import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Error from "./components/Error"
import Navigation from "./components/Navigation"

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <div>
          <Navigation></Navigation>

          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />

              <Route component={Error} />

          </Switch>
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
