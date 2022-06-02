import React, { useContext } from "react";
import { IssueContext } from "../contexts/IssueContext";

//mui
import { StyledTableCell, StyledTableRow } from "../styles/muiIssue";

export default function Issue() {
  const { issues } = useContext(IssueContext);

  return (
    <>
      {issues.map((issue) => (
        <StyledTableRow key={issue.id}>
          <StyledTableCell align="centre">{issue.title}</StyledTableCell>
          <StyledTableCell align="centre">{issue.details}</StyledTableCell>
          <StyledTableCell align="centre">{issue.status}</StyledTableCell>
        </StyledTableRow>
      ))}
    </>
  );
}
