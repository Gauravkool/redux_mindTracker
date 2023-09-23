import { createSelector } from "reselect";
import Product from "../Models/Product";
import { State } from "../Store";
import { productsMapSelector } from "./products";

// top lavel selector
export function orderStateSelector(state: State) {
  return state.orders;
}

export const ordersLoadingSelector = createSelector(
  orderStateSelector,
  function (orderState) {
    return orderState.loading;
  }
);

export const ordersMapSelector = createSelector(
  orderStateSelector,
  (orderState) => orderState.orders
);

export const ordersSelector = createSelector(
  ordersMapSelector,
  (normalizeOrders) =>
    Object.keys(normalizeOrders).map((orderId) => normalizeOrders[+orderId])
);

export const ordersProductSelector = createSelector(
  ordersMapSelector,
  productsMapSelector,
  (orderMap, productMap) =>
    Object.keys(orderMap).reduce<{
      [orderId: number]: Product[];
    }>((previous, currentOrderId) => {
      const order = orderMap[+currentOrderId];
      const products = order.products.map((pid) => productMap[pid]);
      return { ...previous, [currentOrderId]: products };
    }, {})
);
