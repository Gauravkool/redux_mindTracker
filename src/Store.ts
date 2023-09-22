import { combineReducers, createStore } from "redux";
import SadnessReducer from "./reducer/SadReducer";
import HappinessReducer from "./reducer/HappyReducer";
import productReducer from "./reducer/products";
import ordersReducer from "./reducer/orders";

export type Moment = {
  intensity: number;
  when: Date;
};

// reducer has to be non mutating
// reducer has to be a pure mutating

const reducer = combineReducers({
  sad: SadnessReducer,
  happy: HappinessReducer,
  products: productReducer,
  orders: ordersReducer
});

export type State = ReturnType<typeof reducer>;
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
