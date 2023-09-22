import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadOrderAction, ordersLoadedAction } from "./actions/orders";
import axios from "axios";
import { ordersLoadingSelector, ordersSelector } from "./selectors/orders";
import { Link } from "react-router-dom";
type OrderListPageProps = {};
const OrderListPage: FC<OrderListPageProps> = (props) => {
  const dispatch = useDispatch();
  const ordersLoading = useSelector(ordersLoadingSelector);

  const orders = useSelector(ordersSelector);
  useEffect(function () {
    dispatch(loadOrderAction());
    axios.get("https://dummyjson.com/carts").then((res) => {
      dispatch(ordersLoadedAction(res.data.carts));
    });
  }, []);
  if (ordersLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {orders.map((o) => (
        <div key={o.id}>
          <Link className="text-red-500" to={"/orders/" + o.id}>
            Order number : {o.id}
          </Link>{" "}
          Total : {o.total} Products :{o.totalProducts}
        </div>
      ))}
    </div>
  );
};
OrderListPage.defaultProps = {};
export default memo(OrderListPage);
