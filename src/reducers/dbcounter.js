export const dbCounterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state +1;
    case "CLEAR":
      return 0;
    default:
      return state;
  }
};
