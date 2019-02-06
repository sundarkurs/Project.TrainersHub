import React from "react";
import { Route, Switch, NavLink } from 'react-router-dom';

import ContactIndia from "./ContactIndia"
import ContactUsa from "./ContactUsa"

const Contact = () => {
    return(
        <div>
            <div className="page-header">
                <h2>Contact us...</h2>
            </div>

            <div className="links">
                <NavLink to="/contact/india" className="link">India Office</NavLink> |&nbsp;
                <NavLink to="/contact/usa" className="link">Us Office</NavLink>
            </div>
            <Switch>
                <Route path="/contact/india" component={ ContactIndia }/>
                <Route path="/contact/usa" component={ ContactUsa }/>
                <Route render={ () => <h4>Select region...</h4> }/>
            </Switch>
        </div>
    );
};

export default Contact;

// https://itnext.io/basics-of-react-router-v4-336d274fd9e0