import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <div>
            {/* <button className="navbar-toggle collapsed" 
                type="button" data-toggle="collapse" 
                data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
            </button> */}

            <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;