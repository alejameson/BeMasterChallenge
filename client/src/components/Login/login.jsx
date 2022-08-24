import React from "react";
import { Grid, Paper, TextField, Avatar, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import './login.css'

export function Login() {
const paperStyle = {padding: 20, height: "70vh", width:350, margin: "20px auto", backgroundColor: "rgba(255, 255, 255, 0.906)"}
const avatarStyle = {backgroundColor: "rgba(119, 53, 243, 0.906)"}

const handleOnClick = (e) => {
   e.preventDefault()
   alert("HOLA PEPE")
}
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><LockIcon /></Avatar>
                <h2 className="loginTitle">Log In</h2>
            </Grid>
            <TextField label="Email" placeholder="example@mail.com" type="email" color="secondary" fullWidth required/>
            <TextField label="Password" placeholder="*******" type="password" color="secondary" style={{marginTop: 20, marginBottom: 20}} fullWidth required/>
            <Button type="submit" color="secondary" variant="contained" fullWidth onClick={(e) => handleOnClick(e  )}>Sign In</Button>
        </Paper>
    </Grid>
  );
}
