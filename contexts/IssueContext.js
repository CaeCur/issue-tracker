import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const IssueContext = createContext();

export default function IssueContextProvider(props) {
  const [issues, setIssues] = useState([
    {
      id: uuid(),
      title: "Test issue",
      details: "This is a test issue",
      status: "In Progress",
      onVersion: "1.0.0",
      priority: "High",
      createdBy: "Caelan",
      assignedTo: "Caelan",
      createdOn: "02/06/2022",
      updatedOn: "02/06/2022",
      dueDate: "02/07/2022",
    },
    {
      id: uuid(),
      title: "Peach is stinky",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam maxime consectetur odio similique optio ducimus voluptatem nihil repellat minima aliquid, repellendus reiciendis soluta corrupti non repudiandae, iure illo necessitatibus laudantium? Et, libero! Officiis earum harum commodi quasi necessitatibus, molestiae voluptas. Placeat itaque voluptatem dolorem eligendi necessitatibus quasi laborum voluptate incidunt recusandae tempora consequuntur dicta reprehenderit doloremque fugiat eum velit dolor, sunt assumenda ipsa nisi corporis deleniti? Facere consequuntur aliquam sapiente odit ipsum rerum nisi at autem. Natus suscipit distinctio, vero animi error quibusdam eos qui cumque consequatur id nobis! Maxime rerum officiis quas velit expedita cum fugiat omnis autem magni!",
      status: "In Progress",
      onVersion: "1.0.0",
      priority: "High",
      createdBy: "Caelan",
      assignedTo: "Peach",
      createdOn: "02/06/2022",
      updatedOn: "02/06/2022",
      dueDate: "02/07/2022",
    },
  ]);

  return (
    <IssueContext.Provider value={{ issues, setIssues }}>{props.children}</IssueContext.Provider>
  );
}
