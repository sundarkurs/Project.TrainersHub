import React, { Component } from "react";
import PropTypes from "prop-types";

class WorkoutItem extends Component {
    
  deleteWorkout(id) {
    this.props.onDelete(id);
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
                <p className="card-text">Description.</p>
                <a href="#" onClick={this.deleteWorkout.bind(this, this.props.workout.id)} 
                className="btn btn-danger">Delete</a>
            </div>
        </div>
    );
  }
}


export default WorkoutItem;