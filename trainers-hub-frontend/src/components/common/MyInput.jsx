import React, { Component } from "react";

const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">{props.title}</label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />

      <div className="text-danger">{props.error}</div>
    </div>
  )
}

export default Input;

{/* <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" name="lastName" className="form-control" value={this.state.fields.lastName }
                        onChange={this.handleChange}/>
                    </div> */}