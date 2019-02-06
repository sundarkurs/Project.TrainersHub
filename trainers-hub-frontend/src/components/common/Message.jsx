import React, { Component } from "react";

class Message extends React.Component {

    constructor() {
        super();
    }

    getCssClass(code) {
        if(code == "SUCCESS"){
            return "alert alert-success";
        } else if(code == "ERROR"){
            return "alert alert-danger";
        } else if(code == "INFO"){
            return "alert alert-info";
        }
    }

    render(){
        return (
            <div className={this.getCssClass(this.props.code)}>
                <strong>{this.props.message}</strong>
            </div>
          );
    }
};

export default Message;
