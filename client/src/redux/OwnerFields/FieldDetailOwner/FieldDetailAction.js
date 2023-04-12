import axios from "axios";

export const GET_FIELD_DETAIL = "GET_FIELD_DETAIL"

export function getFieldDetail(id) {
  return dispatch => {
    axios.get(`http://localhost:3001/owner/getFieldDetail/${id}`)
      .then(res => {
        dispatch({
          type: GET_FIELD_DETAIL,
          payload: res.data
        })
      })
      .catch(e =>
        console.log(e)
      )
  }
}