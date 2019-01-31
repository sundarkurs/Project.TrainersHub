import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { GetValue } from '../utilities/QueryString';

class EditWorkout extends React.Component {

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

    getWorkout(id){
        fetch('http://api.trainershub.com/api/workouts/' + id)
        .then(response => response.json())
        .then(data => {
            debugger;
                this.setState({ fields: data },
                    function() {
                        console.log(this.state);
                      }
                    )

                this.setState({
                    workoutId: data.id
                });
                
            }
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validateForm()) {
            fetch('http://api.trainershub.com/api/workouts/' + this.state.workoutId , {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.fields)
            })
            .then(data => {
                if(data.status == 200){
                    alert("Updated");
                }
            });
        }
    }

    validateForm(){
        debugger;
        let fields = this.state.fields;
        let errors = {};
        let isFormValid = true;

        if (!fields["type"]) {
            isFormValid = false;
            errors["type"] = "*Please enter the expert level.";
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
        debugger;

        let workoutId = GetValue("id");

        if(workoutId){

            

            this.getWorkout(workoutId);
        }
    }

    render(){

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/workouts'/>;
        }

        return (
            <div>
                <div className="page-header">
                    <h2>Edit workout</h2>
                </div>

                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Type:</label>
                        <input type="text" name="type" className="form-control" value={this.state.fields.type } 
                        onChange={this.handleChange}/>
                        <div className="text-danger">{this.state.errors.type}</div>
                    </div>

                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" name="description" className="form-control" value={this.state.fields.description }
                        onChange={this.handleChange}/>
                        <div className="text-danger">{this.state.errors.description}</div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
          );
    }
};

export default EditWorkout;


