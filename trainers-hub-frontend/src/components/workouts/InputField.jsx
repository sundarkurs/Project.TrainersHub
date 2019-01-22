import React, { Component } from 'react';

class InputField extends Component {
    render() {
    let {
        onChange,//required 
        value,//required 
        message,//required
        title,//custom prop
        type="text"//custom prop
    }=this.props;
    return (
        <div className="form-group">
            <label>{title}:</label>
            <input type={type} className="form-control"/>
            {message && <span>{ message }</span>}
        </div>
    );
  }
}
export default InputField;