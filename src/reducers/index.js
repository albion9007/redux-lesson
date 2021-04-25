import { combineReducers } from "redux";
import reducerMeat from "./reducerMeat";
import reducerVegetable from "./reducerVegetable";

// reducerMeatとreducerVegetableを結合させる。
const rootReducer = combineReducers({
  reducerMeat,
  reducerVegetable,
});

export default rootReducer;
