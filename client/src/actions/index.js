import Users from "../UsersMock.json"
import Movies from "../MoviesMock.json"

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const GET_MOVIES = "GET_MOVIES";
export const GET_CATEGORY = "GET_CATEGORY";
export const GET_CATEGORY_MOVIES = "GET_CATEGORY_MOVIES";
export const GET_MOVIE_BY_ID = "GET_MOVIE_BY_ID";

export function getUsers() {
    return {
        type: GET_USERS,
        payload: Users
    };
};

export function getUser(user) {
    console.log(user, 'USER ACTION')
    return {
        type: GET_USER,
        payload: user
    };
};

export function getCategory(category) {
    console.log(category, 'ACTIONS CATEGORY')
    return {
        type: GET_CATEGORY,
        payload: category
    };
};

export function getMovies() {
    return {
        type: GET_MOVIES,
        payload: Movies
    };
};

export function getCategoryMovies() {
    return {
        type: GET_CATEGORY_MOVIES
    };
};

export function getMovieById(id) {
    console.log(id, "DEBERIA TRAER EL NUM")
    return {
        type: GET_MOVIE_BY_ID,
        payload: id,
    };
};