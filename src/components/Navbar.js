import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
             <nav>
                <NavLink className="navTags" to="/"> HomePage </NavLink>
                <NavLink className="navTags" to="/products"> Autos </NavLink>
            </nav>
        </div>
    )
}

export default Navbar
