import React from "react";
import { NavLink } from "react-router-dom";
import Logo from './../../logo.svg'
import './Header.css'

export default function Header() {
    return(
        <header className="Header">
            <NavLink to='/'><img src={Logo} className="Logo" alt="logo" /></NavLink>
            <ul className="Menu">
                <NavLink to="/"><li className="MenuLink">Accueil</li></NavLink>
                <NavLink to="/"><li className="MenuLink">Profil</li></NavLink>
                <NavLink to="/"><li className="MenuLink">Réglage</li></NavLink>
                <NavLink to="/"><li className="MenuLink">Communauté</li></NavLink>
            </ul>
        </header>
    );
}