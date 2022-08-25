import { GET_USER, GET_USERS, GET_CATEGORY, GET_MOVIES, GET_CATEGORY_MOVIES } from "../actions";

const initialState = {
    users: [],
    user: {},
    category: "",
    terror: [],
    comedia: [],
    romance: [],
    suspenso: [],
    accion: [],
    drama: []
}

function rootReducer (state = initialState, action){
    switch(action.type){

        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }

        case GET_USER:
            console.log(action, "ACTION REDUCER")
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
                console.log(state.category, 'STATE CATEGORY')
            }else {
                console.log("VACIO");
            }
            if(state.category === "terror"){
                return {
                    ...state,
                    terror: state.movies.flatMap((m) => m.category.filter(c => c==="terror").length && m)
                }
            }else if(state.category === "drama") {
                return {
                    ...state,
                    drama: state.movies.flatMap((m) => m.category.filter(c => c==="drama").length && m)
                }
            }else if(state.category === "suspenso") {
                return {
                    ...state,
                    suspenso: state.movies.flatMap((m) => m.category.filter(c => c==="suspenso").length && m)
                }
            }else if(state.category === "accion") {
                return {
                    ...state,
                    accion: state.movies.flatMap((m) => m.category.filter(c => c==="accion").length && m)
                }
            }else if(state.category === "comedia") {
                return {
                    ...state,
                    comedia: state.movies.flatMap((m) => m.category.filter(c => c==="comedia").length && m)
                }
            }else if(state.category === "romance") {
                return {
                    ...state,
                    romance: state.movies.flatMap((m) => m.category.filter(c => c==="romance").length && m)
                }
            }

        default:
            return state;
    }
}

export default rootReducer;