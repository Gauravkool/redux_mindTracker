import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productsLoadingSelector,
  productsSelector,
} from "./selectors/products";
import { loadProductsAction, productsLoadedAction } from "./actions/products";
import axios from "axios";
type ProductListPageProps = {};
const ProductListPage: FC<ProductListPageProps> = (props) => {
  const loading = useSelector(productsLoadingSelector);
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsAction());
    axios.get("https://myeasykart.codeyogi.io/products").then((res) => {
      dispatch(productsLoadedAction(res.data.data));
    });
  }, []);
  return (
    <div>
      {loading && <div className="text-2xl text-red-700">Loading...</div>}
      {products &&
        products.map((p) => (
          <div className="text-xl text-indigo-700" key={p.id}>
            {p.title} (Rs.{p.price})
          </div>
        ))}
    </div>
  );
};
ProductListPage.defaultProps = {};
export default memo(ProductListPage);
