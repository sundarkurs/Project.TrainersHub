import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class AddTrainer extends React.Component {

    constructor() {
        super();

        this.state = (
            { trainer: { firstName: '', lastName : '', email : '', phone : '', dateOfBirth : '', address : '', dateOfJoin : '', profilePic: ''}}
        );
           
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var trainer = this.state.trainer;

        if(event.target.name == "firstName"){
            trainer.firstName = event.target.value
        }
        if(event.target.name == "lastName"){
            trainer.lastName = event.target.value
        }
        this.setState({trainer: trainer});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://api.trainershub.com/api/trainers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.trainer)
        })
        .then(data => {
            if(data.status == 200){
                this.setState({ redirect: true })
            }
        });
    }

    componentWillMount() {
    }

    render(){

        const { redirect } = this.state;

        if (redirect) {
        return <Redirect to='/trainers'/>;
        }

        return (
            <div>
                <div className="page-header">
                    <h2>Add trainer</h2>
                </div>

                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" name="firstName" className="form-control" value={this.state.trainer.firstName } 
                        onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" name="lastName" className="form-control" value={this.state.trainer.lastName }
                        onChange={this.handleChange}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <a href="/trainers" className="btn btn-info">Go back</a>
                </form>
            </div>
          );
    }
};

export default AddTrainer;

// TODO
// https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y
// https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
