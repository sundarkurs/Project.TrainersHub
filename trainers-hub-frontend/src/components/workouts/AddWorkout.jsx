import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class AddWorkout extends React.Component {

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

    handleSubmit(event) {
        event.preventDefault();

        if (this.validateForm()) {
            fetch('http://api.trainershub.com/api/workouts', {
            method: 'POST',
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
    }

    render(){

        const { redirect } = this.state;

        if (redirect) {
        return <Redirect to='/workouts'/>;
        }

        return (
            <div>
                <div className="page-header">
                    <h2>Add workout</h2>
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
                    <a href="/workouts" className="btn btn-info">Go back</a>
                </form>
            </div>
          );
    }
};

export default AddWorkout;

// TODO
// https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y
// https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
