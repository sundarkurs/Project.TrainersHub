import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import ExpertLevelItem from "./ExpertLevelItem"
import AddExpertLevel from "./AddExpertLevel"
import Message from "../common/Message"

class ExpertLevels extends React.Component {

    constructor() {
        super();
    
        this.state = {
            expertLevels: [],
            showMessage: false,
            statusCode: '',
            statusMessage: ''
        };
    }

    handleDeleteExpertLevel(id) {
        // TODO : Delete confirmation
        let expertLevels = this.state.expertLevels;
        let index = expertLevels.findIndex(x => x.id === id);

        fetch('http://api.trainershub.com/api/expertlevels/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(data => {
            if(data.status == 200){
                expertLevels.splice(index, 1);
                this.setState({
                    expertLevels: expertLevels,
                    showMessage : true,
                    statusCode : "SUCCESS",
                    statusMessage : "Expertise level deleted successfully."
                });
            }
            // TODO : Exception handle
        });
    }

    getExpertLevels() {

        fetch('http://api.trainershub.com/api/expertlevels')
        .then(response => response.json())
        .then(data => {
                this.setState({ expertLevels: data },
                    function() {
                        console.log(this.state);
                      }
                    )
            }
        );
    }

    componentWillMount() {
        this.getExpertLevels();

        if(this.props.location.state && this.props.location.state.statusCode && this.props.location.state.statusMessage){

            this.setState({
                showMessage : true,
                statusCode : this.props.location.state.statusCode,
                statusMessage : this.props.location.state.statusMessage
            });

            // Clearing the location state which was received from other component route
            this.props.history.replace({
                pathname: '/expertlevels',
                state: {}
            });
        }

    }

    render(){
        let expertLevelItems;
        if (this.state.expertLevels) {
            expertLevelItems = this.state.expertLevels.map(expertLevel => {
            return (
              <ExpertLevelItem
                onDelete={this.handleDeleteExpertLevel.bind(this)}
                key={expertLevel.id}
                expertLevel={expertLevel}
              />
            );
          });
        }

        return (
            <div>
                <div className="page-header">
                    <h2>Expert Levels</h2>
                </div>

                <div>
                    { this.state.showMessage ? <Message message={this.state.statusMessage} code={this.state.statusCode} /> : null }
                </div>

                <div className="">
                    <a href="/addexpertlevel" className="btn btn-primary">Add expert level</a>
                </div>

                <div className="card-columns">
                    {expertLevelItems}
                </div>
            </div>
          );
    }
};

export default ExpertLevels;