import React, { Component } from "react";
import PropTypes from "prop-types";

class WorkoutItem extends Component {
    
  deleteWorkout(id) {
    this.props.onDelete(id);
  }

  editWorkout(workout) {
    debugger
    fetch('http://api.trainershub.com/api/workouts/' + workout.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
            })
            .then(data => {
              debugger;
                if(data.status == 200){
                    alert("Updated");
                }
            });
  }

  render() {

    var cardCustomization = {
      width: '18rem'
    };

    return (
        <div className="card" style={cardCustomization}>
            <img className="card-img-top" src="images/default_workout_avatar.png" alt="Card image"/>
            <div className="card-body">
                <h4 className="card-title">{this.props.workout.type}</h4>
                <p className="card-text">{this.props.workout.description}</p>
                <a href="#" onClick={this.deleteWorkout.bind(this, this.props.workout.id)} 
                className="btn btn-danger">Delete</a>
                {/* <a href="#" onClick={this.editWorkout.bind(this, this.props.workout)} 
                className="btn btn-secondary">Edit</a> */}

                <a href={ "/editWorkout?id=" + this.props.workout.id } className="btn btn-primary">Edit</a>
                
            </div>
        </div>
    );
  }
}

export default WorkoutItem;