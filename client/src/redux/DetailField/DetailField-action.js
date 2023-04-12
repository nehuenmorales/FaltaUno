import axios from "axios";

export const GET_FIELDS = 'GET_FIELDS';
export const GET_FIELDS_BY_ID = 'GET_FIELDS_BY_ID';
export const GET_SEARCH_FIELDS = 'GET_SEARCH_FIELDS';


export function getFieldById(id) {

  return dispatch => {
    axios.get(`http://localhost:3001/fields/detail/${id}`)
      .then(res => {
        dispatch({
          type: GET_FIELDS_BY_ID,
          payload: res.data
        })
      })
      .catch(e =>
        console.log(e)
      )
  }
}

export function getAllFields(sport) {

  return dispatch => {
    axios.get(`http://localhost:3001/fields/${sport}`)
      .then(res => {
        dispatch({
          type: GET_FIELDS,
          payload: res.data
        })
      })
      .catch(e =>
        console.log(e)
      )
  }
}

export function getSearchFields(input, sport) {

  return dispatch => {
    axios.get(`http://localhost:3001/fields/${sport}/getSearchField?name=${input}`)
      .then(res => {
        dispatch({
          type: GET_SEARCH_FIELDS,
          payload: res.data
        })
      })
      .catch(e =>
        console.log(e)
      )
  }
}
