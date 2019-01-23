import React, { Component } from "react";
import PropTypes from "prop-types";

class TrainerItem extends Component {
    
  deleteTrainer(id) {
    this.props.onDelete(id);
  }

  render() {

    var cardCustomization = {
        
    };

    return (
        <div className="card" style={cardCustomization}>
            <img className="card-img-top" src="images/default-trainer-avatar.jpg" alt="Card image"/>
            <div className="card-body">
                <h4 className="card-title">{this.props.trainer.firstName}</h4>
                <p className="card-text">{this.props.trainer.lastname}</p>
                <a href="#" onClick={this.deleteTrainer.bind(this, this.props.trainer.id)} 
                className="btn btn-danger">Delete</a>
            </div>
        </div>
    );
  }
}


export default TrainerItem;