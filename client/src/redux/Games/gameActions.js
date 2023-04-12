import axios from "axios";

export const CREATE_GAME = "CREATE_GAME";
export const PUT_GAME = "PUT_GAME";

export const createGame = (body) => {
    return async function (dispatch) {
        return axios.post("http://localhost:3001/owner/createGame", body)
            .then((res) => {
                return dispatch({ type: CREATE_GAME, payload: res })
            })
    }
}
