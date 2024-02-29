const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "X":
      return state;
    case "Y":
      return state;
    default:
      return state;
  }
};

export default productReducer;
