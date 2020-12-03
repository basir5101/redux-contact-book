import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <a href="#home" className="navbar-brand">
                    Contact Book
                </a>
                <div>
                    <Link to="/contact/add" className="btn btn-light ml-auto">Create Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;