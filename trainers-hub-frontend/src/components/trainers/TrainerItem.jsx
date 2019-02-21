import React, { Component } from "react";
import PropTypes from "prop-types";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class TrainerItem extends Component {
    
  deleteTrainer(trainer) {

    confirmAlert({
      title: 'Are you sure?',
      message: 'You want to delete the trainer ' + trainer.firstName + '?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.onDelete(trainer.id)
        },
        {
          label: 'No',
        }
      ]
    })

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
              <a href="#" onClick={this.deleteTrainer.bind(this, this.props.trainer)} className="btn btn-danger">Delete</a>
              <a href={ "/editTrainer?id=" + this.props.trainer.id } className="btn btn-primary">Edit</a>
            </div>
        </div>
    );
  }
}


export default TrainerItem;