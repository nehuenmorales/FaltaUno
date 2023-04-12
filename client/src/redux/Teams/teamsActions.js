import axios from "axios";

export const CREATE_TEAM = "CREATE_TEAM";
export const GET_TEAM_USER = "GET_TEAM_USER"
export const GET_TEAM = "GET_TEAM"


export function getTeam(id) {
  return (dispatch) => {
    axios.get(`http://localhost:3001/team/getTeam/${id}`)
      .then((res) => {
        dispatch({
          type: GET_TEAM,
          payload: res.data
        })
      })
  }
}

export function createTeam(input) {
  return (dispatch) => {
    axios
      .post(`http://localhost:3001/team/createTeam`, input)
      .then((res) => {
        dispatch({
          type: CREATE_TEAM,
          payload: res.data,
        });
      })
      .catch((e) => console.log(e));
  };
}
///player/getPlayerProfile?email=mmm@mail.com
// /team/getTeamUser/${email}
export function getTeamsUser(email) {
  return (dispatch) => {
    axios.get(`http://localhost:3001/team/getTeamUser/${email}`)
      .then(res => {
        dispatch({ type: GET_TEAM_USER, payload: res.data })

      })

      .catch(e =>
        console.log(e)
      )
  }
  // return (dispatch) => {
  //   axios
  //   .get(`/team/getTeamUser/${email}`)
  //   .then((res) => {
  //       dispatch({
  //         type: GET_TEAM_USER,
  //         payload: res.data,
  //       });
  //     })
  //     .catch((e) => console.log(e));
  // };
}
