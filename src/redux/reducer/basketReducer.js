const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "X":
      return state;
    case "Y":
      return state;
    default:
      return state;
  }
};

export default basketReducer;
