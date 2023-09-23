import { State } from "../Store";
import { createSelector } from "reselect";

export function productStateSelector(state: State) {
  return state.products;
}

export const productsLoadingSelector = createSelector(
  productStateSelector,
  (productState) => productState.loading
);
export const productsMapSelector = createSelector(
  productStateSelector,
  (productState) => productState.products
);

export const productsSelector = createSelector(
  productsMapSelector,
  (normalizedProducts) =>
    Object.keys(normalizedProducts).map((pid) => normalizedProducts[+pid])
);
