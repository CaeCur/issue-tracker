import React, { createContext, useCallback, useState } from "react";

export const IssueContext = createContext({
  issues: [],
  loading: false,
  updateContext: () => {},
});

const getIssues = async (context) => {
  let res = await fetch("http://localhost:3000/api/issues", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const { data } = await res.json();

  const issues = [...data];

  return issues;
};

export default function IssueContextProvider({ children }) {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpdateContext = useCallback(async () => {
    setLoading(true);
    let updatedIssues;

    try {
      updatedIssues = await getIssues();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }

    setIssues(updatedIssues);
  }, []);

  const context = {
    issues,
    loading,
    updateContext: handleUpdateContext,
  };

  //TODO: we should add memoization here to enable issues to be cached

  return <IssueContext.Provider value={context}>{children}</IssueContext.Provider>;
}

// check this to fix: https://stackoverflow.com/questions/58822154/pass-fetch-returned-promise-as-context-value-in-reactjs
