import axios from "axios";
import { useDispatch } from "react-redux";
export const setLoading = () => {
  return {
    type: "SET_LOADING",
  };
};

export const setProducts = (payload) => {
  return {
    type: "SET_PRODUCTS",
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: "SET_ERROR",
    payload,
  };
};

export const getData = () => {
  return (dispatch) => {
    //isteğin başladığını stpre'a bildir
    dispatch(setLoading());

    // api istekleri atıp sonrasında store'a haber verebilriz
    axios
      .get("http://localhost:3010/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };
};
