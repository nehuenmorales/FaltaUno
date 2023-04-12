import axios from "axios";

export const MODIFY_COMPLEX = "MODIFY_COMPLEX"

export function modifyComplex(body, id) {
  return dispatch => {
    axios.put(`http://localhost:3001/owner/modifyComplex/${id}`, body)
      .then(res => {
        dispatch({
          type: MODIFY_COMPLEX,
          payload: res.data
        })
      })
      .catch(e =>
        console.log(e)
      )
  }
}