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

    case "SET_BASKET_LOADING":
      return { ...state, isLoading: true };

    case "SET_BASKET_ERROR":
      return { ...state, isLoading: false, isError: action.payload };

    case "SET_BASKET_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        basket: action.payload,
      };

    case "UPDATE":
      //güncellenecek diznin kopyasını oluştur.
      const cloneBasket = [...state.basket];
      //güncellenecek elemanın dizideki sırasını bul
      const foundId = cloneBasket.findIndex(
        (item) => item.id === action.payload
      );
      //elemanın mik. 1 arttır.
      cloneBasket[foundId].amount++;

      return { ...state, basket: cloneBasket };

    case "DELETE":
      const filtred = state.basket.filter((item) => item.id !== action.payload);
      return { ...state, basket: filtred };

    case "DECREASE":
      const cloneDecBasket = [...state.basket];
      const findId = cloneDecBasket.findIndex(
        (item) => item.id === action.payload
      );
      cloneDecBasket[findId].amount--;
      return { ...state, basket: cloneDecBasket };
    default:
      return state;
  }
};

export default basketReducer;
