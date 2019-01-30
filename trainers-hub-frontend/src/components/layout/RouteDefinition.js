import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from "../Home"
import Contact from "../Contact"
import About from "../About"
import Error from "../Error"
import Trainers from "../trainers/Trainers"
import AddTrainer from "../trainers/AddTrainer"
import Workouts from "../workouts/Workouts"
import AddWorkout from "../workouts/AddWorkout"
import ExpertLevels from "../expertLevels/ExpertLevels"
import AddExpertLevel from "../expertLevels/AddExpertLevel"

const RouteDefinition = () => {
    return(
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/trainers" component={Trainers} />
            <Route path="/addtrainer" component={AddTrainer} />
            <Route path="/workouts" component={Workouts} />
            <Route path="/addworkout" component={AddWorkout} />
            <Route path="/expertlevels" component={ExpertLevels} />
            <Route path="/addexpertlevel" component={AddExpertLevel} />
            <Route component={Error} />
        </Switch>
    );
};

export default RouteDefinition;