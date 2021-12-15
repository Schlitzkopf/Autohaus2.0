import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
             <nav>
                <NavLink className="navTags" to="/"> MAIN </NavLink>
                <NavLink className="navTags" to="/products"> AUTOS </NavLink>
            </nav>
        </div>
    )
}

export default Navbar
