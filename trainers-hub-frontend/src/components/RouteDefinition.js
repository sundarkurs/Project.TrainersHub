import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from "../components/Home"
import Contact from "../components/Contact"
import About from "../components/About"
import Error from "../components/Error"

const RouteDefinition = () => {
    return(
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route component={Error} />
        </Switch>
    );
};

export default RouteDefinition;