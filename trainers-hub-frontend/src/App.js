import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouteDefinition from "./components/RouteDefinition"
import Header from "./components/Header"

class App extends Component {
  render() {

    var style = {
      border: 'red',
    };

    return (
        <BrowserRouter>
          <div>
            <Header/>
            <div className="container container-extended" style={style}>
              <RouteDefinition/>
            </div>

            <footer className="fixed-bottom bg-dark text-center text-light">
              <p>Copyright reserved</p> 
            </footer>

          </div>
        </BrowserRouter>
    );
  }
}

export default App;
