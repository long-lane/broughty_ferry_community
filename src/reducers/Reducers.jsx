const NavReducer = (state = [], action) => {
  switch (action.type) {
    case "navDisplay":
      return action.payload;

    default:
      return state;
  }
};
export { NavReducer };
