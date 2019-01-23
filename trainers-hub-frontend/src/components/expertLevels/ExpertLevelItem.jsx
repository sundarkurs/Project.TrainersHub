import React, { Component } from "react";
import PropTypes from "prop-types";

class ExpertLevelItem extends Component {
    
  deleteExpertLevel(id) {
    this.props.onDelete(id);
  }

  render() {

    var cardCustomization = {
        
    };

    return (
        <div className="card" style={cardCustomization}>
            <img className="card-img-top" src="images/default-expert-avatar.png" alt="Card image"/>
            <div className="card-body">
                <h4 className="card-title">{this.props.expertLevel.level}</h4>
                <p className="card-text">{this.props.expertLevel.description}</p>
                <a href="#" onClick={this.deleteExpertLevel.bind(this, this.props.expertLevel.id)} 
                className="btn btn-danger">Delete</a>
            </div>
        </div>
    );
  }
}


export default ExpertLevelItem;