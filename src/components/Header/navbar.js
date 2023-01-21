import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <Link to={'/'} className="navbar-brand text-light" >Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link text-light">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/contact'} className="nav-link text-light" >Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/about'} className="nav-link text-light" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/login'} className="nav-link text-light" >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/register'} className="nav-link text-light" >Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;