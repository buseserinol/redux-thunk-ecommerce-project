const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        basket: state.basket.concat(action.payload),
      };
    case "Y":
      return state;
    default:
      return state;
  }
};

export default basketReducer;
