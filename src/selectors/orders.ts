import Product from "../Models/Product";
import { State } from "../Store";
export function ordersLoadingSelector(state: State) {
  return state.orders.loading;
}
export function ordersSelector(state: State) {
  const normalizeOrders = state.orders.orders;
  const ordersArr = Object.keys(normalizeOrders).map(
    (orderId) => normalizeOrders[+orderId]
  );
  return ordersArr;
}

export function ordersMapSelector(state: State) {
  return state.orders.orders;
}
export function ordersProductSelector(state: State) {
  return Object.keys(state.orders.orders).reduce<{
    [orderId: number]: Product[];
  }>((previous, currentOrderId) => {
    const order = state.orders.orders[+currentOrderId];
    const products = order.products.map((pid) => state.products.products[pid]);
    return { ...previous, [currentOrderId]: products };
  }, {});
}
