import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <header className="header2">
            <div className="header-background2">
                <img src="https://media.istockphoto.com/id/1303030943/photo/aircraft-landing-at-sunrise.jpg?b=1&s=612x612&w=0&k=20&c=AFw8c26uilOykdOkTD13AwdOaCX8J20-OAl7X6f3ui8=" alt="Pakistan Landscape" />
            </div>
            <nav className="navbar">
                <div className="logo">
                    <img src="https://www.tripplannerpk.com/assets/img/tripplanerpk-log.webp" alt="Trip Planner Logo" />
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#destinations">Destinations</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/login">SingnIn</a></li>
                </ul>
            </nav>

        </header>
    );
};

export default Nav;
