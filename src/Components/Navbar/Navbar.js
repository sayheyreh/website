import React, { useState } from "react";
import "../Navbar/Navbar.css";

function Navbar(){
    return(
        <div>
            <div className="navbar">
                <div className="container">
                    <div className="split">
                        <div className="left">
                            <div className="name">Rehaan Sahay</div>
                        </div>
                        <div className="right">  
                            <a href="#">Home</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;