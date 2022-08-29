import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import { getCategory } from "../../actions";
import { Link } from "react-router-dom";

export function Home() {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleOnClick = (c) => {
    dispatch(getCategory(c));
  };

  return (
    <div className="home">
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
      >
        {user?.categorys.map((c, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Box
              sx={{
                width: 250,
                height: 300,
                margin: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                backgroundColor: "#212121",
                "&:hover": {
                  backgroundColor: "#424242",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Link
                to={`/category`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div onClick={() => handleOnClick(c)}>
                  <h1>{c}</h1>
                </div>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
