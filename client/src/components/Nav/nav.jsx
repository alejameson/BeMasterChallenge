import React from "react";
import { Button, InputBase } from "@mui/material";
import { Link } from "react-router-dom";
import './nav.css'

export function Nav () {
    return (
        <div className="navbar">
                <Link to="/home" className="homeButton"><h3>Home</h3></Link>
                <h3>Contact</h3>
                <h3>About</h3>
        </div>
    )
}