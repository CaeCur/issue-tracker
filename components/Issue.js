import React, { useContext, useEffect } from "react";
import { IssueContext } from "../contexts/IssueContext";

//mui
import { StyledTableCell, StyledTableRow } from "../styles/muiIssue";

export default function Issue() {
  const { issues, loading } = useContext(IssueContext);

  return loading ? (
    <StyledTableRow>
      <StyledTableCell align="left"></StyledTableCell>
      <StyledTableCell align="center">LOADING...</StyledTableCell>
      <StyledTableCell align="left"></StyledTableCell>
    </StyledTableRow>
  ) : issues.length ? (
    <>
      {issues.map((issue) => (
        <StyledTableRow key={issue._id}>
          <StyledTableCell align="left">{issue.title}</StyledTableCell>
          <StyledTableCell align="left">{issue.details}</StyledTableCell>
          <StyledTableCell align="left">{issue.status}</StyledTableCell>
        </StyledTableRow>
      ))}
    </>
  ) : (
    <StyledTableRow>
      <StyledTableCell align="left"></StyledTableCell>
      <StyledTableCell align="center">No Issues</StyledTableCell>
      <StyledTableCell align="left"></StyledTableCell>
    </StyledTableRow>
  );
}
