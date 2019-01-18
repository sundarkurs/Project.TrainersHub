import React from "react";
import Navigation from "../components/Navigation"

const Header = () => {
    return(
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Trainers Hub</a>
            <Navigation />
        </nav>
    );
};

export default Header;