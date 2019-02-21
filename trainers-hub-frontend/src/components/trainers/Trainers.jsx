import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import TrainerItem from "./TrainerItem"

class Trainers extends React.Component {

    constructor() {
        super();
    
        this.state = {
            trainers: []
        };
    }

    handleDeleteTrainer(id) {
        // TODO : Delete confirmation
        let trainers = this.state.trainers;
        let index = trainers.findIndex(x => x.id === id);

        fetch('http://api.trainershub.com/api/trainers/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(data => {
            if(data.status == 200){
                trainers.splice(index, 1);
                this.setState({
                    trainers: trainers
                });
            }
            // TODO : Exception handle
        });
    }

    getTrainers() {

        fetch('http://api.trainershub.com/api/trainers')
        .then(response => response.json())
        .then(data => {
                this.setState({ trainers: data },
                    function() {
                        console.log(this.state);
                      }
                    )
            }
        );
    }

    componentWillMount() {
        this.getTrainers();
    }

    render(){
        let trainerItems;
        if (this.state.trainers) {
            trainerItems = this.state.trainers.map(trainer => {
            return (
              <TrainerItem
                onDelete={this.handleDeleteTrainer.bind(this)}
                key={trainer.id}
                trainer={trainer}
              />
            );
          });
        }

        return (
            <div>
                <div className="page-header">
                    <h2>Trainers</h2>
                </div>

                <div className="">
                    <a href="/addtrainer" className="btn btn-primary">Add trainer</a>
                </div>

                <div className="card-columns">
                    {trainerItems}
                </div>
            </div>
          );
    }
};

export default Trainers;