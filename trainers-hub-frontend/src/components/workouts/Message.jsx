import React, { Component } from "react";

class Message extends React.Component {

    constructor() {
        super();
    }

    getMessageType(code) {
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
            <div className={this.getMessageType(this.props.code)}>
                <strong>{this.props.message}</strong>
            </div>
          );
    }
};

export default Message;
