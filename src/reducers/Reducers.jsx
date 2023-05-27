const NavReducer = (state = [], action) => {
  switch (action.type) {
    case "navDisplay":
      return {...state, ...action.payload};
    
    default:
      return state;
  }
};
export { NavReducer };
