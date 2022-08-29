import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryMovies, getMovies } from "../../actions";
import { Link } from "react-router-dom";
import "./contentCategory.css"

export function ContentCategory () {
    const dispatch = useDispatch();
    const categorySelected = useSelector(state => state.category);
    const terror = useSelector(state => state.terror);
    const comedia = useSelector(state => state.comedia);
    const romance = useSelector(state => state.romance);
    const suspenso = useSelector(state => state.suspenso);
    const accion = useSelector(state => state.accion);
    const drama = useSelector(state => state.drama);

    useEffect(() => {
        dispatch(getMovies())
        dispatch(getCategoryMovies())
    },[dispatch])

    return (
        <div className="categorysContainer">
            {categorySelected === "terror" ? terror.map((t) => (
                <div className="movieCard">
                   <img src={t.poster} alt="" width="260" height="335" />
                   <h2>{t.name.length < 19 ? t.name : t.name.slice(0,18) + "..." }</h2>
                   <Link to={`/detail/${t.id}`} style={{textDecoration: "none", color: "white"}}><Button color="secondary" variant="contained" fullWidth>Trailer 🎬</Button></Link>
                </div>
            )): categorySelected === "comedia" ? comedia.map((c) => (
              <div className="movieCard">
                   <img src={c.poster} alt="" width="260" height="335" />
                   <h2>{c.name.length < 19 ? c.name : c.name.slice(0,18) + "..."}</h2>
                   <Link to={`/detail/${c.id}`} style={{textDecoration: "none", color: "white"}}><Button color="secondary" variant="contained" fullWidth>Trailer 🎬</Button></Link>
                </div>
            )): categorySelected === "romance" ? romance.map((r) => (
                <div className="movieCard">
                   <img src={r.poster} alt="" width="260" height="335" />
                   <h2>{r.name.length < 19 ? r.name : r.name.slice(0,18) + "..."}</h2>
                   <Link to={`/detail/${r.id}`} style={{textDecoration: "none", color: "white"}}><Button color="secondary" variant="contained" fullWidth>Trailer 🎬</Button></Link>
                </div>
            )): categorySelected === "suspenso" ? suspenso.map((s) => (
                <div className="movieCard">
                   <img src={s.poster} alt="" width="260" height="335" />
                   <h2>{s.name.length < 19 ? s.name : s.name.slice(0,18) + "..."}</h2>
                   <Link to={`/detail/${s.id}`} style={{textDecoration: "none", color: "white"}}><Button color="secondary" variant="contained" fullWidth>Trailer 🎬</Button></Link>
                </div>
            )): categorySelected === "accion" ? accion.map((a) => (
                <div className="movieCard">
                   <img src={a.poster} alt="" width="260" height="335" />
                   <h2>{a.name.length < 19 ? a.name : a.name.slice(0,18) + "..."}</h2>
                   <Link to={`/detail/${a.id}`} style={{textDecoration: "none", color: "white"}}><Button color="secondary" variant="contained" fullWidth>Trailer 🎬</Button></Link>
                </div>
            )): categorySelected === "drama" && drama.map((d) => (
                <div className="movieCard">
                   <img src={d.poster} alt="" width="260" height="335" />
                   <h2>{d.name.length < 19 ? d.name : d.name.slice(0,18) + "..."}</h2>
                   <Link to={`/detail/${d.id}`} style={{textDecoration: "none", color: "white"}}><Button color="secondary" variant="contained" fullWidth>Trailer 🎬</Button></Link>
                </div>
            ))}
        </div>
    )
}