import React from "react";
import Logo from '../images/airbnblogo.png'

export default function Navbar(){
    return(
        <nav>
            <img src={Logo} alt="logo" className="nav--logo"/>
        </nav>
    )
}