import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import ExpertLevelItem from "./ExpertLevelItem"
import AddExpertLevel from "./AddExpertLevel"

class ExpertLevels extends React.Component {

    constructor() {
        super();
    
        this.state = {
            expertLevels: []
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
                    expertLevels: expertLevels
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