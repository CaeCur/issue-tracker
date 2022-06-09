import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const IssueContext = createContext();

export default function IssueContextProvider({ children }) {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  //we initially want to set our context's state to whatever issues we have in the DB.
  //let's fetch our issues using axios
  const getIssues = async () => {
    setLoading(true);
    const { data, status } = await axios.get("http://localhost:3000/api/issues");

    if (status === 200) {
      setIssues(data.issues);
      setLoading(false);
    } else {
      console.log(status);
    }
  };

  //let's refresh our context issues on every render
  useEffect(() => {
    getIssues();
  }, []);

  // add our state vars to an object for easy export
  const context = {
    issues,
    loading,
  };

  //TODO: maybe we should add memoization here to enable issues to be cached

  return <IssueContext.Provider value={context}>{children}</IssueContext.Provider>;
}
