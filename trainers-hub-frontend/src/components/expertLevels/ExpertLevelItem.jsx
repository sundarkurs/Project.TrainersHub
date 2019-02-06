import React, { Component } from "react";
import PropTypes from "prop-types";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class ExpertLevelItem extends Component {
    
  deleteExpertLevel(expertLevel) {
    confirmAlert({
      title: 'Are you sure?',
      message: 'You want to delete the ' + expertLevel.level + " workout?",
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.onDelete(expertLevel.id)
        },
        {
          label: 'No',
        }
      ]
    })
  }

  render() {

    var cardCustomization = {
    };

    return (
        <div className="card text-white bg-info mb-3 card-extension" style={cardCustomization}>
          <h5 className="card-header">{this.props.expertLevel.level}</h5>
            <div className="card-body">
              <p className="card-text">{this.props.expertLevel.description}</p>
               <a href="#" onClick={this.deleteExpertLevel.bind(this, this.props.expertLevel)} 
               className="btn btn-danger">Delete</a>
               <a href={ "/editexpertlevel?id=" + this.props.expertLevel.id } className="btn btn-primary">Edit</a>
            </div>
        </div>
    );
  }
}


export default ExpertLevelItem;