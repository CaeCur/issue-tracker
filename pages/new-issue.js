import React, { useState } from "react";

//mui
import Container from "@mui/material/Container";
import { Autocomplete, MenuItem, TextField, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("form has been submitted");
};

export default function NewIssueForm() {
  //form state
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [details, setDetails] = useState("");
  const [detailsError, setDetailsError] = useState("");
  const [onVersion, setOnVersion] = useState("1.0.0");
  const [onVersionError, setOnVersionError] = useState("");
  const [users, setUsers] = useState(["caelanc", "florab"]);
  const [priority, setPriority] = useState(["elective", "important", "urgent"]);
  const [dueDate, setDueDate] = useState(null);

  return (
    <Container>
      <Typography variant="h6" component={"h2"} color="textSecondary" gutterBottom>
        Create a New Issue
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        {/* title */}
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          margin="dense"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
          helperText={titleError ? "Title is required" : ""}
        ></TextField>

        {/* details */}
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          margin="dense"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
          helperText={detailsError ? "Details are required" : ""}
        ></TextField>

        {/* on version */}
        <TextField
          onChange={(e) => setOnVersion(e.target.value)}
          label="Version of Software"
          placeholder={onVersion}
          margin="dense"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={onVersionError}
          helperText={onVersionError ? "Software version is required" : ""}
        ></TextField>

        {/* assign to */}
        <Autocomplete
          disablePortal
          options={users}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Assign to"
              margin="dense"
              variant="outlined"
              color="secondary"
              fullWidth
              required
            />
          )}
        />

        {/* priority */}
        <Autocomplete
          disablePortal
          options={priority}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Priority"
              margin="dense"
              variant="outlined"
              color="secondary"
              fullWidth
              required
            />
          )}
        />

        {/* due date */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Due date"
            inputFormat="dd/MM/yyyy"
            value={dueDate}
            onChange={(newValue) => {
              setDueDate(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                margin="dense"
                variant="outlined"
                color="secondary"
                fullWidth
                required
              />
            )}
          ></DatePicker>
        </LocalizationProvider>
      </form>
    </Container>
  );
}

/*
title:Second Test Issue String -text field
details:longer just to test what happens if a long string is recieved. String - text field
status:1 Int32 - dropdown
onVersion:1.0.0 String - text field
priority:0 Int32 - dropdown
createdBy:caelan String - drop down
assignedTo:Peach String - drop down
createdOn:2022-06-03T22:00:00.000+00:00 Date - date picker
updatedOn:2022-06-03T22:00:00.000+00:00 Date - date picker
dueDate:2022-07-01T22:00:00.000+00:00 Date - date picker
*/
