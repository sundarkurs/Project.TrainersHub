import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import DateTimePicker from 'react-datetime-picker';

import MySelect from "../common/MySelect"
import MyInput from "../common/MyInput"
import { GetValue } from '../utilities/QueryString';

class EditTrainer extends React.Component {

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
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let fields = this.state.fields;
        
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        });
    }

    handleDateChange(fieldName, date){
        let fields = this.state.fields;
        
        fields[fieldName] = date;
        this.setState({
            fields
        });
    }

    getTrainer(id){
        fetch('http://api.trainershub.com/api/trainers/' + id)
        .then(response => response.json())
        .then(data => {
                this.setState({ 
                    fields: data 
                })

                this.setState({
                    trainerId: data.id
                });
            }
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validateForm()) {
            fetch('http://api.trainershub.com/api/trainers/' + this.state.trainerId, {
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
        debugger;
        let fields = this.state.fields;
        let errors = {};
        let isFormValid = true;

        if (!fields["firstName"]) {
            isFormValid = false;
            errors["firstName"] = "Please enter the first name.";
        }

        if(typeof fields["firstName"] !== "undefined"){
            if(!fields["firstName"].match(/^[a-zA-Z]+$/)){
                isFormValid = false;
               errors["firstName"] = "Only alphabets are allowed.";
            }        
         }

        if (!fields["lastName"]) {
            isFormValid = false;
            errors["lastName"] = "Please enter the last name.";
        }

        if (!fields["email"]) {
            isFormValid = false;
            errors["email"] = "Please enter the email address.";
        }

        if(typeof fields["email"] !== "undefined"){
            var emailExpression = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

            if(!fields["email"].match(emailExpression)){
                isFormValid = false;
               errors["email"] = "Please enter a valid email address.";
            }        
         }

         if(typeof fields["phone"] !== "undefined"){
            var phoneExpression = /[0-9]+/;

            if(!fields["phone"].match(phoneExpression)){
                isFormValid = false;
               errors["phone"] = "Please enter a valid phone number.";
            }        
         }

        this.setState({
            errors: errors
        });
        return isFormValid;
    }

    componentWillMount() {
        let trainerId = GetValue("id");
        if(trainerId){
            this.getTrainer(trainerId);
        }
    }

    render(){

        const { redirect } = this.state;

        if (redirect) {
            //return <Redirect to='/trainers'/>;

            // <Redirect to={
            //     {
            //         pathname: "/login",
            //         search: "?utm=your+face",
            //         state: { referrer: currentLocation }
            //     }
            // }/>
            
            let redirectStatus = {
                statusCode: "SUCCESS",
                statusMessage : "Trainer " + this.state.fields.firstName + " is updated successfully."
            };
            
            this.props.history.push({
                pathname: '/trainers',
                state: redirectStatus
              })
        }

        return (
            <div>
                <div className="page-header">
                    <h2>Edit trainer</h2>
                </div>

                <form onSubmit={this.handleSubmit}>

                    <MyInput type={'text'}
                        title= {'First Name'} 
                        name= {'firstName'}
                        value={this.state.fields.firstName} 
                        error={this.state.errors.firstName} 
                        placeholder = {'Enter your first name'}
                        handleChange = {this.handleChange}
                    />

                    <MyInput type={'text'}
                        title= {'Last Name'} 
                        name= {'lastName'}
                        value={this.state.fields.lastName} 
                        error={this.state.errors.lastName} 
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

                    <MyInput type={'text'}
                        title= {'Email'} 
                        name= {'email'}
                        value={this.state.fields.email} 
                        error={this.state.errors.email} 
                        placeholder = {'Enter your email address.'}
                        handleChange = {this.handleChange}
                    />

                    <MyInput type={'text'}
                        title= {'Phone'} 
                        name= {'phone'}
                        value={this.state.fields.phone} 
                        error={this.state.errors.phone} 
                        placeholder = {'Enter your phone number.'}
                        handleChange = {this.handleChange}
                    />

                    <div className="form-group">
                        <label>Date of Birth:</label>
                        <br/>
                        <DateTimePicker className="date-picker-extension" name="dateOfBirth" 
                            onChange={(e) => this.handleDateChange('dateOfBirth', e)}
                            //value={this.state.fields.dateOfBirth} 
                        />
                    </div>

                    <div className="form-group">
                        <label>Address:</label>
                        <textarea type="text" rows="3" cols="100" name="address" className="form-control" value={this.state.fields.address }
                        onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Date of Join:</label>
                        <br/>
                        <DateTimePicker className="date-picker-extension" name="dateOfJoin" 
                            onChange={(e) => this.handleDateChange('dateOfJoin', e)}
                            //value={this.state.fields.dateOfJoin} 
                            />
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

export default EditTrainer;

// TODO
// https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y
// https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
