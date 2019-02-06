import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { GetValue } from '../utilities/QueryString';

class EditExpertLevel extends React.Component {

    constructor() {
        super();

        this.state = {
            fields: {}, 
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        });
    }

    getExpertLevel(id){
        fetch('http://api.trainershub.com/api/expertlevels/' + id)
        .then(response => response.json())
        .then(data => {
            debugger;
                this.setState({ fields: data },
                    function() {
                        console.log(this.state);
                    }
                )

                this.setState({
                    expertLevelId: data.id
                });
                
            }
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validateForm()) {
            fetch('http://api.trainershub.com/api/expertlevels/' + this.state.expertLevelId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.fields)
            })
            .then(data => {
                if(data.status == 200){
                    this.setState({ redirect: true })
                }
            });
        }
    }

    validateForm(){
        let fields = this.state.fields;
        let errors = {};
        let isFormValid = true;

        if (!fields["level"]) {
            isFormValid = false;
            errors["level"] = "*Please enter the expert level.";
        }

        if (!fields["description"]) {
            isFormValid = false;
            errors["description"] = "*Please enter the description.";
        }

        this.setState({
            errors: errors
        });
        return isFormValid;
    }

    componentWillMount() {
        let expertLevelId = GetValue("id");

        if(expertLevelId){
            this.getExpertLevel(expertLevelId);
        }
    }

    render(){
        const { redirect } = this.state;

        if (redirect) {
            let redirectStatus = {
                statusCode: "SUCCESS",
                statusMessage : "Expertise level " + this.state.fields.level + " is updated successfully."
            };
            
            return <Redirect to={
                {
                    pathname: "/expertlevels",
                    //search: "?name=sundar",
                    state: redirectStatus
                }
            }/>
        }

        return (
            <div>
                <div className="page-header">
                    <h2>Add expert level</h2>
                </div>

                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Level:</label>
                        <input type="text" name="level" className="form-control" value={this.state.fields.level } 
                        onChange={this.handleChange}/>
                        <div className="text-danger">{this.state.errors.level}</div>
                    </div>

                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" name="description" className="form-control" value={this.state.fields.description }
                        onChange={this.handleChange}/>
                        <div className="text-danger">{this.state.errors.description}</div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <a href="/expertlevels" className="btn btn-info">Go back</a>
                </form>
            </div>
          );
    }
};

export default EditExpertLevel;
