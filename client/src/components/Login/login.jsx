import React from "react";
import { useState, useEffect } from "react";
import { Grid, Paper, TextField, Avatar, Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUsers } from "../../actions";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 350,
    margin: "20px auto",
    backgroundColor: "rgba(255, 255, 255, 0.906)",
  };
  const avatarStyle = { backgroundColor: "rgba(119, 53, 243, 0.906)" };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log(users, "USERS");

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setUser((user) => ({
        ...user,
        email: e.target.value,
      }));
    } else {
      setUser((user) => ({
        ...user,
        password: e.target.value,
      }));
    }
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    if (user.email.length === 0) {
      setErrorEmail(true);
    } else if (user.password.length > 8) {
      setErrorPassword(true)
    }else {
      users.map((u) =>
        u.email === user.email && u.password === user.password
          ? (navigate("/home"), alert("Welcome"), dispatch(getUser(u)))
          : ""
      );
    }
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2 className="loginTitle">Log In</h2>
        </Grid>
        <TextField
          label="Email"
          error={errorEmail}
          placeholder="example@mail.com"
          type="email"
          name="email"
          color="secondary"
          onChange={(e) => handleChange(e)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          error={errorPassword}
          placeholder="*******"
          type="password"
          name="password"
          color="secondary"
          onChange={(e) => handleChange(e)}
          style={{ marginTop: 20, marginBottom: 20 }}
          fullWidth
          required
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          fullWidth
          onClick={(e) => handleOnClick(e)}
        >
          Sign In
        </Button>
      </Paper>
    </Grid>
  );
}
