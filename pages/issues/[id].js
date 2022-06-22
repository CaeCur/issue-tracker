import React, { useContext } from "react";
import { useRouter } from "next/router";
import { IssueContext } from "../../contexts/IssueContext";

export default function IssueDetails(props) {
  const router = useRouter();
  const { id } = router.query;
  const { issues, loading } = useContext(IssueContext);

  console.log(issues);

  return <div>This is the details page for issue # {id}</div>;
}
