import React, { Component } from "react";

class Message extends React.Component {

    constructor() {
        super();
    }

    render(){
        return (
            <div className="alert alert-success">
                <strong>{this.props.code}!</strong> {this.props.message}.
            </div>
          );
    }
};

export default Message;
