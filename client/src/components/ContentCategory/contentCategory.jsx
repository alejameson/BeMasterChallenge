import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryMovies, getMovies } from "../../actions";

export function ContentCategory () {
    const dispatch = useDispatch()
    const terror = useSelector(state => state.terror)
    const comedia = useSelector(state => state.comedia)
    const romance = useSelector(state => state.romance)
    const suspenso = useSelector(state => state.suspenso)
    const accion = useSelector(state => state.accion)
    const drama = useSelector(state => state.drama)

    console.log(terror, comedia, romance, suspenso, accion, drama, "MOVIES")
    useEffect(() => {
        dispatch(getMovies())
        dispatch(getCategoryMovies())
    },[dispatch])
    return <h1>CONTENT CATEGORY</h1>
}