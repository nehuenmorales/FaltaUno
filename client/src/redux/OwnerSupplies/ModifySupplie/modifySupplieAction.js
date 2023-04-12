import axios from "axios";

export const MODIFY_SUPPLIE = "MODIFY_SUPPLIE"

export function modifySupplie(body, id) {
  return dispatch => {
    axios.put(`http://localhost:3001/owner/modifySupplies/${id}`, body)
      .then(res => {
        dispatch({
          type: MODIFY_SUPPLIE,
          payload: res.data
        })
      })
      .catch(e =>
        console.log(e)
      )
  }
}