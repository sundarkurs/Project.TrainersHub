import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from "../Home"
import Contact from "../contactUs/Contact"
import About from "../About"
import Error from "../Error"

import Trainers from "../trainers/Trainers"
import AddTrainer from "../trainers/AddTrainer"
import EditTrainer from "../trainers/EditTrainer"

import Workouts from "../workouts/Workouts"
import AddWorkout from "../workouts/AddWorkout"
import EditWorkout from "../workouts/EditWorkout"

import ExpertLevels from "../expertLevels/ExpertLevels"
import AddExpertLevel from "../expertLevels/AddExpertLevel"
import EditExpertLevel from "../expertLevels/EditExpertLevel"

const RouteDefinition = () => {
    return(
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            
            <Route path="/trainers" component={Trainers} />
            <Route path="/addtrainer" component={AddTrainer} />
            <Route path="/edittrainer" component={EditTrainer} />

            <Route path="/workouts" component={Workouts} />
            <Route path="/addworkout" component={AddWorkout} />
            <Route path="/editworkout" component={EditWorkout} />

            {/* <Route path='/' render={ props => <EditWorkout {...props} />} /> */}

            <Route path="/expertlevels" component={ExpertLevels} />
            <Route path="/addexpertlevel" component={AddExpertLevel} />
            <Route path="/editexpertlevel" component={EditExpertLevel} />
            <Route component={Error} />
        </Switch>
    );
};

export default RouteDefinition;

// https://itnext.io/basics-of-react-router-v4-336d274fd9e0
