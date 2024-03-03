import { createStore, combineReducers, applyMiddleware } from "redux";
import basketReducer from "./reducer/basketReducer";
import productReducer from "./reducer/productReducer";
import { thunk } from "redux-thunk";
//reducerlerı birleştir.

const rootReducer = combineReducers({
  basket: basketReducer,
  products: productReducer,
});

//store'u oluştur ve export
export default createStore(rootReducer, applyMiddleware(thunk));
