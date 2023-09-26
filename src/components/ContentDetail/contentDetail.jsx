import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../../actions";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ReactPlayer from 'react-player';
import "./contentDetail.css"

export function ContentDetail() {
  const movieSelected = useSelector((state) => state.movieSelected);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [dispatch]);

  const movie = movieSelected[0];

  return (
    <div className="detailContainer">
      {movieSelected.length ? (
        <div className="detail">
          <div className="imgdetail">
            <ReactPlayer url={movie.trailer} width="580px" height="520px" />
            <div className="contdet">
              <h1>
                {movie.name}
              </h1>
              <h4 className="colorgen">
                {movie.category.map((g) => g).join(" ")}
              </h4>
            </div>
          </div>
          <div className="game">
            <div className="detaildesc">
              <div className="descript">
                <h3>DESCRIPTION</h3>
              </div>
              <h4>{movie.description}</h4>
            </div>
            <div className="btndetail">
              <Link to="/home" style={{ textDecoration: 'none' }}>
                <Button color="secondary" variant="contained" sx={{width: "300px", height: "50px"}}>HOME</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="loadingdetail">
          <img
            src="https://cdn2.scratch.mit.edu/get_image/gallery/3887263_170x100.png"
            width="200"
            height="200"
          />
        </div>
      )}
    </div>
  );
}
