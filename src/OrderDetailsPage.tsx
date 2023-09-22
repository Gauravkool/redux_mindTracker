import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ordersMapSelector, ordersProductSelector } from "./selectors/orders";
import axios from "axios";
import { orderDetailLoadedAction } from "./actions/orders";
type OrderDetailsPageProps = {};
const OrderDetailsPage: FC<OrderDetailsPageProps> = (props) => {
  const params = useParams();
  const orderId = +params.orderId!;
  const dispatch = useDispatch();
  const ordersMap = useSelector(ordersMapSelector);
  const ordersProductsMap = useSelector(ordersProductSelector);
  console.log("ordersProductsMap", ordersProductsMap)
  const order = ordersMap[orderId];
  const products = ordersProductsMap[orderId];
  useEffect(() => {
    axios.get("https://dummyjson.com/carts/" + orderId).then((res) => {
      dispatch(orderDetailLoadedAction(res.data));
    });
  }, [orderId, ordersMap]);
  if (!order) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      This is order number : {order.id} Total price : {order.total}
      <div>
        {products.map((p) => (
          <div key={p.id}>{p.title}</div>
        ))}
      </div>
    </div>
  );
};
OrderDetailsPage.defaultProps = {};
export default memo(OrderDetailsPage);
