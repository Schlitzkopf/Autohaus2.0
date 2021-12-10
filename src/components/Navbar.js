import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
             <nav>
                <NavLink to="/"> HomePage </NavLink>
                <NavLink to="/products"> Produkte </NavLink>
            </nav>
        </div>
    )
}

export default Navbar
