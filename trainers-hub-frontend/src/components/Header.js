import React from "react";
import Navigation from "../components/Navigation"

const Header = () => {
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Trainers Hub</a>
             <div className="collapse navbar-collapse" id="navbarText">
                <Navigation />
            </div>
        </nav>
    );
};

export default Header;