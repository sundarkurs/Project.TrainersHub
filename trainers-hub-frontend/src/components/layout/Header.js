import React from "react";
import Navigation from "./Navigation"

const Header = () => {
    return(
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark header-extended">
            <a className="navbar-brand" href="#">Trainers Hub</a>
            <Navigation />
        </nav>
    );
};

export default Header;