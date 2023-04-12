import axios from "axios";

export const GET_COMPLEX_DETAIL = "GET_COMPLEX_DETAIL"

export function getComplexDetail(id) {
  return dispatch => {
    axios.get(`http://localhost:3001/owner/getComplexDetail/${id}`)
      .then(res => {
        dispatch({
          type: GET_COMPLEX_DETAIL,
          payload: res.data
        })
      })
      .catch(e =>
        console.log(e)
      )
  }
}