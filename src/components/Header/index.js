import React from "react";

function Header() {
    return (
    <div>
        <h1>Hunter Willoughby Kantner</h1>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/aboutme">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact Me</a>
                </li>
            </ul>
     </div>
    </nav>
    </div>
    );
};

export default Header;