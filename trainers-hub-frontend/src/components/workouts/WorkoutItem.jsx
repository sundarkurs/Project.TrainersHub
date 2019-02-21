import React, { Component } from "react";
import PropTypes from "prop-types";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class WorkoutItem extends Component {
    
  deleteWorkout(workout) {

    confirmAlert({
      title: 'Are you sure?',
      message: 'You want to delete the ' + workout.type + " workout?",
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.onDelete(workout.id)
        },
        {
          label: 'No',
        }
      ]
    })
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
          <a href="#" 
            onClick={this.deleteWorkout.bind(this, this.props.workout)} 
            className="btn btn-danger">Delete</a>
          <a href={ "/editWorkout?id=" + this.props.workout.id } className="btn btn-primary">Edit</a>
        </div>
      </div>
    );
  }
}

export default WorkoutItem;