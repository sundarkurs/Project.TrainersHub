import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouteDefinition from "./components/RouteDefinition"
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <div className="container container-padding">
              <RouteDefinition/>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
