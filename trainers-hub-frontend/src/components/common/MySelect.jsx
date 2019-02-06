import React, { Component } from "react";

const MySelect = (props) => {
    return(
        <div className="form-group">
            <label htmlFor={props.name}> {props.title} </label>
            <select
              className="form-control"
              name={props.name}
              value={props.value}
              onChange={props.handleChange}
              >
              <option value="" disabled>{props.placeholder}</option>
              {props.options.map(option => {
                return (
                  <option
                    key={option}
                    value={option}
                    label={option}>{option}
                  </option>
                );
              })}
            </select>
      </div>)
}

export default MySelect;