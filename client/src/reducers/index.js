import { GET_USER, GET_USERS, GET_CATEGORY, GET_MOVIES, GET_CATEGORY_MOVIES, GET_MOVIE_BY_ID } from "../actions";

const initialState = {
    users: [],
    user: {},
    category: "",
    terror: [],
    comedia: [],
    romance: [],
    suspenso: [],
    accion: [],
    ficcion: [],
    drama: [],
    movieSelected: {}
}

function rootReducer (state = initialState, action){
    switch(action.type){

        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }

        case GET_USER:
            return {
                ...state,
                user: action.payload
            }

        case GET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }

        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        
        case GET_CATEGORY_MOVIES:
        if(state.category){
            if(state.category === "terror"){
                return {
                    ...state,
                    terror: state.movies.flatMap((m) => m.category.filter((c) => c==="terror").length === 1 && m).filter((e) => e !== false)
                }
            }else if(state.category === "drama") {
                return {
                    ...state,
                    drama: state.movies.flatMap((m) => m.category.filter((c) => c==="drama").length === 1 && m).filter((e) => e !== false)
                }
            }else if(state.category === "suspenso") {
                return {
                    ...state,
                    suspenso: state.movies.flatMap((m) => m.category.filter((c) => c==="suspenso").length === 1 && m).filter((e) => e !== false)
                }
            }else if(state.category === "accion") {
                return {
                    ...state,
                    accion: state.movies.flatMap((m) => m.category.filter((c) => c==="accion").length === 1 && m).filter((e) => e !== false)
                }
            }else if(state.category === "comedia") {
                return {
                    ...state,
                    comedia: state.movies.flatMap((m) => m.category.filter((c) => c==="comedia").length === 1 && m).filter((e) => e !== false)
                }
            }else if(state.category === "romance") {
                return {
                    ...state,
                    romance: state.movies.flatMap((m) => m.category.filter((c) => c==="romance").length === 1 && m).filter((e) => e !== false)
                }
            }else if(state.category === "ficcion") {
                return {
                    ...state,
                    ficcion: state.movies.flatMap((m) => m.category.filter((c) => c==="ficcion").length === 1 && m).filter((e) => e !== false)
                }
            }
        }

        case GET_MOVIE_BY_ID:
            return {
                ...state,
                movieSelected: state.movies.filter((m) => m.id == action.payload)
            }

        default:
            return state;
    }
}

export default rootReducer;