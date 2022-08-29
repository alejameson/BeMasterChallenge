import React from "react";
import { Button, InputBase } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import './nav.css'

export function Nav () {
    return (
        <div className="navbar">
                <Link to="/home" className="homeButton"><h3>Home</h3></Link>
                <h3>Contact</h3>
                <h3>About</h3>
                <Link to="/" className="homeButton"><h3>Log Out <LogoutIcon sx={{position: "relative", top: "5px", marginLeft: "10px"}}/></h3></Link>
        </div>
    )
}