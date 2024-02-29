import { createStore, combineReducers } from "redux";
import basketReducer from "./reducer/basketReducer";
import productReducer from "./reducer/productReducer";
//reducerlerı birleştir.

const rootReducer = combineReducers({
  basket: basketReducer,
  product: productReducer,
});

//store'u oluştur ve export
export default createStore(rootReducer);
