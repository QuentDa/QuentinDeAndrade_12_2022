import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css'
import Picto1 from './../../assets/svg/picto1.svg'
import Picto2 from './../../assets/svg/picto2.svg'
import Picto3 from './../../assets/svg/picto3.svg'
import Picto4 from './../../assets/svg/picto4.svg'

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarMenu">
                <NavLink to="/">
                    <li className="SidebarMenuList">
                        <img src={Picto1} alt="pictogramme" />
                    </li>
                </NavLink>
                <NavLink to="/">
                    <li className="SidebarMenuList">
                        <img src={Picto2} alt="pictogramme" />
                    </li>
                </NavLink>
                <NavLink to="/">
                    <li className="SidebarMenuList">
                        <img src={Picto3} alt="pictogramme" />
                    </li>
                </NavLink>
                <NavLink to="/">
                    <li className="SidebarMenuList">
                        <img src={Picto4} alt="pictogramme" />
                    </li>
                </NavLink>
            </ul>
            <div className="CopyrightWrapper">
                <span className="Copyright">Copyright, SportSee 2020</span>
            </div>
        </div>
    );
}