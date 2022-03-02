import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__row">
                    <div className="navbar__left">
                        <Link to="/">
                            Blogpost
                        </Link>
                    </div>
                    <div className="navbar__right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/create">Create</Link>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
