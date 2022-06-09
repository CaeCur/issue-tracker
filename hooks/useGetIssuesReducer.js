import { useReducer } from "react";
import axios from "axios";

export default function useGetIssues(reducer, initial) {
  const [state, dispatch] = useReducer(reducer, initial);

  async function getIssues() {
    const { data, status } = await axios.get("http://localhost:3000/api/issues");

    if (status === 200) {
      dispatch({ type: "LOAD_ISSUES", payload: data.issues });
    } else {
      console.log(status);
    }
  }

  return [state, getIssues];
}
