import { FC, memo, useEffect } from "react";
import axios from "axios";
import Order from "./Models/Order";
import Product from "./Models/Product";

export type OrderDetailsPageProps = {
  order:  Order ;
  products: Product[] ;
  orderDetailLoaded: (order: Order) => void;
  orderId: number;
};
const OrderDetailsPage: FC<OrderDetailsPageProps> = ({
  order,
  products,
  orderDetailLoaded,
  orderId,
}) => {
  
  useEffect(() => {
    axios.get("https://dummyjson.com/carts/" + orderId).then((res) => {
      orderDetailLoaded(res.data);
    });
  }, [orderId]);
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
