import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class AddExpertLevel extends React.Component {

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

        debugger;

        if (this.validateForm()) {
            fetch('http://api.trainershub.com/api/expertlevels', {
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
    }

    render(){

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/expertlevels'/>;
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
                </form>
            </div>
          );
    }
};

export default AddExpertLevel;

// TODO
// https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y
// https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
// https://www.skptricks.com/2018/06/simple-form-validation-in-reactjs-example.html
