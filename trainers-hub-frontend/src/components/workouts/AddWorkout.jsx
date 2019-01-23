import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class AddWorkout extends React.Component {

    constructor() {
        super();

        this.state = (
            { workout: { type: '', description : ''}}
        );
           
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var work = this.state.workout;

        if(event.target.name == "type"){
            work.type = event.target.value
        }
        if(event.target.name == "description"){
            work.description = event.target.value
        }
        this.setState({workout: work});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://api.trainershub.com/api/workouts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.workout)
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
                        <input type="text" name="type" className="form-control" value={this.state.workout.type } 
                        onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" name="description" className="form-control" value={this.state.workout.description }
                        onChange={this.handleChange}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
          );
    }
};

export default AddWorkout;

// TODO
// https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y
// https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
