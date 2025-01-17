import axios from "axios";

export const CREATE_SUPPLIES = "CREATE_SUPPLIES";
export const PUT_SUPPLIES = "PUT_SUPPLIES";
export const GET_SUPPLIES = "GET_SUPPLIES";

export const createSupplies = (body) => {
  return async function (dispatch) {
    return axios.post("http://localhost:3001/owner/createSupplies", body)
      .then((res) => {
        return dispatch({ type: CREATE_SUPPLIES, payload: res })
      })
  }
}


export function getSupplies(id, sport) {
  return async function (dispatch) {
    const { data } = await axios.get(`http://localhost:3001/supplies/${sport}/${id}`);
    dispatch({ type: GET_SUPPLIES, payload: data });
  };
}