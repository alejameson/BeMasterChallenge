import Users from "../UsersMock.json"

export const GET_USERS = "GET_USERS"

export function getUsers() {
    return {
        type: GET_USERS,
        payload: Users
    }
}