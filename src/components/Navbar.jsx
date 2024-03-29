import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => 
{
    const [menuOpen, setMenuOpen] = useState(false);
    return(
       

        <nav>
            <h1 className="class-website-name"> Horoscope </h1>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                    <li> 
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li> 
                        <NavLink to="/about"> About </NavLink> 
                    </li>
                    <li> 
                        <NavLink to="/contact"> Contact </NavLink> 
                    </li>
                    <li> 
                        <NavLink to="/registration"> Registration </NavLink> 

                    </li>
                </ul>
        </nav>        
    );
}

export default Navbar








