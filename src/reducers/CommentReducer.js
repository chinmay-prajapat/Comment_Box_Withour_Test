export default (state = [], action) => {
  switch (action.type) {
    case "COMMENT_SUBMIT":
      return [...state, action.payload];

    default:
      return state;
  }
};
