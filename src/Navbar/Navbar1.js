import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../image/logo_navbar.png';
import User from '../image/user.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const {logout,user} = useAuth0();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img img src={logo} width="40" height="40" alt=""/>
            </a>
            <a className="navbar-brand" href="/">Sublicolor Nicaragua</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-item nav-link" To="/home">Inicio <span className="sr-only">(current)</span></Link>
                <Link className="nav-item nav-link" To="/image">Productos</Link>
                <Link className="nav-item nav-link" To="/video">Tutoriales</Link>
                <Link className="nav-item nav-link" To="/music">Diviertete</Link>
                <Link className="nav-item nav-link" To="/contact">Contáctanos</Link>
                <button className="btn btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>Salir</button>
                <a className="nav-item nav-link text-white disabled" href="#"><img img src={User} width="25" height="25" alt=""/> {user.picture}</a>
                </div>
            </div>
            </nav>
        </>
        
    );
};