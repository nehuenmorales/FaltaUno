import axios from "axios";

export const CREATE_COMPLEX = "CREATE_COMPLEX";

export const createComplex = (body) => {
    return async function (dispatch) {
        return axios.post("http://localhost:3001/owner/createComplex", body)
            .then((res) => {
                return dispatch({ type: CREATE_COMPLEX, payload: res.data })
            })
    }
}

