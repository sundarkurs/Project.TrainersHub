import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class AddExpertLevel extends React.Component {

    constructor() {
        super();

        this.state = (
            { expertLevel: { level: '', description : ''}}
        );
           
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var work = this.state.expertLevel;

        if(event.target.name == "level"){
            work.level = event.target.value
        }
        if(event.target.name == "description"){
            work.description = event.target.value
        }
        this.setState({expertLevel: work});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://api.trainershub.com/api/expertlevels', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.expertLevel)
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
                        <input type="text" name="level" className="form-control" value={this.state.expertLevel.level } 
                        onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" name="description" className="form-control" value={this.state.expertLevel.description }
                        onChange={this.handleChange}/>
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
