import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import DateTimePicker from 'react-datetime-picker';

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

    handleSubmit(event) {
        event.preventDefault();

        if (this.validateForm()) {
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

        if(typeof fields["lastName"] !== "undefined"){
            if(!fields["lastName"].match(/^[a-zA-Z]+$/)){
                isFormValid = false;
               errors["lastName"] = "Only alphabets are allowed.";
            }        
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

        if (!fields["dateOfBirth"]) {
            isFormValid = false;
            errors["dateOfBirth"] = "Please enter the date of birth.";
        }

        if (!fields["dateOfJoin"]) {
            isFormValid = false;
            errors["dateOfJoin"] = "Please enter the date of join.";
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
                            value={this.state.fields.dateOfBirth} required={true}/>
                        <div className="text-danger">{this.state.errors.dateOfBirth}</div>
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
                            value={this.state.fields.dateOfJoin} required={true}/>
                        <div className="text-danger">{this.state.errors.dateOfJoin}</div>
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
