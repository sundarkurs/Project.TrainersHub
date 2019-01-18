import React, { Component } from "react";
import WorkoutItem from "../components/WorkoutItem"

class Workouts extends React.Component {

    constructor() {
        super();
    
        this.state = {
            workouts: []
        };
    }

    handleDeleteWorkout(id) {
        let workouts = this.state.workouts;
        let index = workouts.findIndex(x => x.id === id);
        workouts.splice(index, 1);

        this.setState({
            workouts: workouts
        });
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
                key={workout.id}
                workout={workout}
              />
            );
          });
        }

        return (
            <div>
                <div className="page-header">
                    <h2>Workouts</h2>
                </div>

                <div className="">
                    <button type="button" class="btn btn-primary">Add new workout</button>
                </div>

                <div className="card-columns">
                    {workoutItems}
                </div>
            </div>
          );
    }
};

export default Workouts;