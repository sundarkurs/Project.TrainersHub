import React, { Component } from "react";
import WorkoutItem from "./WorkoutItem"
import AddWorkout from "./AddWorkout"

import { Route, Switch } from 'react-router-dom';

class Workouts extends React.Component {

    constructor() {
        super();
    
        this.state = {
            workouts: []
        };
    }

    handleDeleteWorkout(id) {
        // TODO : Delete confirmation
        let workouts = this.state.workouts;
        let index = workouts.findIndex(x => x.id === id);

        fetch('http://api.trainershub.com/api/workouts/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(data => {
            if(data.status == 200){
                workouts.splice(index, 1);
                this.setState({
                    workouts: workouts
                });
            }
            // TODO : Exception handle
        });
    }

    handleEditeWorkout(id) {
        alert("Edit");
    }

    getWorkouts() {

        fetch('http://api.trainershub.com/api/workouts')
        .then(response => response.json())
        .then(data => {
                this.setState({ workouts: data },
                    function() {
                        console.log(this.state);
                      }
                    )
            }
        );
    }

    componentWillMount() {
        this.getWorkouts();
    }

    render(){
        let workoutItems;
        if (this.state.workouts) {
            workoutItems = this.state.workouts.map(workout => {
            return (
              <WorkoutItem
                onDelete={this.handleDeleteWorkout.bind(this)}
                onEdit={this.handleEditeWorkout.bind(this)}
                key={workout.id}
                workout={workout}
              />
            );
          });
        }

        return (
            <div>
                {/* <Route path='/workouts/add' component={ AddWorkout } /> */}
                <div className="page-header">
                    <h2>Workouts</h2>
                </div>

                <div className="">
                    <a href="/addworkout" className="btn btn-primary">Add workout</a>
                </div>

                <div className="card-columns">
                    {workoutItems}
                </div>
            </div>
          );
    }
};

export default Workouts;