import React from 'react'
import { NavLink } from 'react-router-dom';
const NavBar = (props) => {
    return (
        <ul className="NavBar">
            <li><NavLink className="link" to="/">All</NavLink></li>
            <li><NavLink className="link" to="/checked">Checked</NavLink></li>
            <li><NavLink className="link" to="/unChecked">Un-Checked</NavLink></li>
        </ul>
    );
}

export default NavBar