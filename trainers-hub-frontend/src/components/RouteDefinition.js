import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from "../components/Home"
import Contact from "../components/Contact"
import About from "../components/About"
import Error from "../components/Error"
import Workouts from "../components/Workouts"

const RouteDefinition = () => {
    return(
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/workouts" component={Workouts} />
            <Route component={Error} />
        </Switch>
    );
};

export default RouteDefinition;