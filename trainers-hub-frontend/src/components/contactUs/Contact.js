import React from "react";
import { Route, Switch, NavLink } from 'react-router-dom';

import ContactIndia from "./ContactIndia"
import ContactUsa from "./ContactUsa"

const Contact = () => {
    return(
        <div>
            <h1>Contact Us</h1>
            <div className="links">
                <NavLink to="/contact/india" className="link">India Office</NavLink>
                <NavLink to="/contact/us" className="link">Us Office</NavLink>
            </div>
            <Switch>
                <Route path="/contact/india" component={ ContactIndia }/>
                <Route path="/contact/us" component={ ContactUsa }/>
                <Route render={ () => <h2>Head Office</h2> }/>
            </Switch>
        </div>
    );
};

export default Contact;