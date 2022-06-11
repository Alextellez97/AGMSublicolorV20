import React from 'react';
import logo from '../image/logo_navbar.png';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const { logout , user} = useAuth0();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src={logo} width="30" height="30" alt=""/>
            </a>
                <Link className="navbar-brand" To="/">Sublicolor Nicaragua</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                    <li><Link className="nav-item nav-link" to="/">Home</Link></li>
                    <li><Link className="nav-item nav-link" to="/image">Image</Link></li>
                    <li><Link className="nav-item nav-link" to="/video">Video</Link></li>
                    <li><Link className="nav-item nav-link" to="/music">Music</Link></li>
                    <li><Link className="nav-item nav-link" to="/contact">Contact</Link></li>
                    <li className="nav-item"><button type="button" class="btn btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>Log out</button></li>
                    <li><a className="disabled text-white"><img src={user.picture} width="30" height="30"/>{user.name}</a></li>
                    </ul>
                </div>
</nav>
        </div>
    );
};