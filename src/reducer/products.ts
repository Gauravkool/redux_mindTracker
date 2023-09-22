import { produce } from "immer";
import { AnyAction } from "redux";
import {} from "./../actions";
import Product from "../Models/Product";
import { LOAD_PRODUCTS, PRODUCTS_LOADED } from "../actions/products";
import { ORDERS_LOADED, ORDER_DETAIL_LOADED } from "../actions/orders";
import { normalize, schema } from "normalizr";

type NormalizedProducts = {
  [id: number]: Product;
};
type State = {
  products: NormalizedProducts;
  loading: boolean;
};
const initialState: State = {
  products: {},
  loading: false,
};

function productReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case PRODUCTS_LOADED:
      return produce(state, (draft) => {
        const products = action.payload;
        const normalizedProducts = products.reduce(function (
          previous: NormalizedProducts,
          current: Product
        ) {
          return { ...previous, [current.id]: current };
        },
        {});
        draft.products = normalizedProducts;
        draft.loading = false;
      });
    case ORDERS_LOADED:
      return produce(state, (draft) => {
        const orders = action.payload;

        const products = orders.reduce(function (
          previous: Product[],
          current: any
        ) {
          return [...previous, ...current.products];
        },
        []);
        const normalizedProducts = products.reduce(function (
          previous: NormalizedProducts,
          current: Product
        ) {
          return { ...previous, [current.id]: current };
        },
        {});
        draft.products = normalizedProducts;
      });
    case ORDER_DETAIL_LOADED:
      return produce(state, (draft) => {
        const order = action.payload;
        const productEntity = new schema.Entity("products");
        const data = normalize(order.products, [productEntity]);
        draft.products = { ...draft.products, ...data.entities.products };
      });
    default:
      return state;
  }
}
export default productReducer;
