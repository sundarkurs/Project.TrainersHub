import React, { Component } from "react";
import PropTypes from "prop-types";

class TrainerItem extends Component {
    
  deleteTrainer(id) {
    this.props.onDelete(id);
  }

  render() {

    var customAvatar = {
      height: '100'
    };

    return (
        <div className="card">
            <img className="card-img-top" style={customAvatar} src="images/default-trainer-avatar.jpg" alt="Trainer picture"/>
            <div className="card-body">
              <h4 className="card-title">{this.props.trainer.firstName}</h4>
              <p className="card-text">{this.props.trainer.lastname}</p>
            </div>
            <div className="card-footer" >
              <a href="#" className="btn btn-info">View</a>
              <a href="#" onClick={this.deleteTrainer.bind(this, this.props.trainer.id)} className="btn btn-danger">Delete</a>
            </div>
        </div>
    );
  }
}


export default TrainerItem;