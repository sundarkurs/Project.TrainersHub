import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import TrainerItem from "./TrainerItem"
import Message from "../common/Message"

class Trainers extends React.Component {

    constructor() {
        super();
    
        this.state = {
            trainers: [],
            showMessage: false,
            statusCode: '',
            statusMessage: ''
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
                    trainers: trainers,
                    showMessage : true,
                    statusCode : "SUCCESS",
                    statusMessage : "Trainer deleted successfully."
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

        if(this.props.location.state && this.props.location.state.statusCode && this.props.location.state.statusMessage){

            this.setState({
                showMessage : true,
                statusCode : this.props.location.state.statusCode,
                statusMessage : this.props.location.state.statusMessage
            });

            // https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md
            // Clearing the location state which was received from other component route
            this.props.history.replace({
                pathname: '/trainers',
                state: {}
            });
        }
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

                <div>
                    { this.state.showMessage ? <Message message={this.state.statusMessage} code={this.state.statusCode} /> : null }
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