import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

import MySelect from "../common/MySelect"
import MyInput from "../common/MyInput"

class AddTrainer extends React.Component {

    constructor() {
        super();

        this.state = {
            fields: {}, 
            errors: {}
        }

        // this.state = (
        //     { trainer: { firstName: '', lastName : '', email : '', phone : '', dateOfBirth : '', address : '', dateOfJoin : '', profilePic: ''}}
        // );
           
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
        fetch('http://api.trainershub.com/api/trainers', {
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

    componentWillMount() {
    }

    render(){

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/trainers'/>;

            // <Redirect to={
            //     {
            //         pathname: "/login",
            //         search: "?utm=your+face",
            //         state: { referrer: currentLocation }
            //     }
            // }/>

        }

        return (
            <div>
                <div className="page-header">
                    <h2>Add trainer</h2>
                </div>

                <form onSubmit={this.handleSubmit}>

                    <MyInput type={'text'}
                        title= {'First Name'} 
                        name= {'firstName'}
                        value={this.state.fields.firstName} 
                        placeholder = {'Enter your first name'}
                        handleChange = {this.handleChange}
                    />

                    <MyInput type={'text'}
                        title= {'Last Name'} 
                        name= {'lastName'}
                        value={this.state.fields.lastName} 
                        placeholder = {'Enter your last name'}
                        handleChange = {this.handleChange}
                    />

                    <MySelect title={'Gender'}
                        name={'gender'}
                        options = {['Male', 'Female']} 
                        value = {this.state.fields.gender}
                        placeholder = {'Select Gender'}
                        handleChange = {this.handleChange}
                    />

                    {/* <div className="form-group">
                        <label>Gender:</label>
                        <input type="text" name="gender" className="form-control"/>
                    </div> */}

                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" name="email" className="form-control" value={this.state.fields.email }
                        onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Phone:</label>
                        <input type="text" name="phone" className="form-control" value={this.state.fields.phone }
                        onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Date of Birth:</label>
                        <input type="text" name="dateOfBirth" className="form-control" value={this.state.fields.dateOfBirth }
                        onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Address:</label>
                        <input type="text" name="address" className="form-control" value={this.state.fields.address }
                        onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Date of Join:</label>
                        <input type="text" name="dateOfJoin" className="form-control" value={this.state.fields.dateOfJoin }
                        onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Profile Pic:</label>
                        <input type="text" name="profilePic" className="form-control" value={this.state.fields.profilePic }
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
