export const issueReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ISSUE":
      return "issue added";
    case "REMOVE_ISSUE":
      return "issue removed";
    default:
      return state;
  }
};
