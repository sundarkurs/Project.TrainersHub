import React, { Component } from "react";
import PropTypes from "prop-types";

class WorkoutItem extends Component {
    
  deleteProject(id) {
    console.log("Delete");
    this.props.onDelete(id);
  }

  render() {
    return (
      <li>
        <strong>{this.props.project.title}</strong> -{" "}
        {this.props.project.category}
        <a
          href="#"
          onClick={this.deleteProject.bind(this, this.props.project.id)}
        >
          X
        </a>
      </li>
    );
  }
}


export default WorkoutItem;