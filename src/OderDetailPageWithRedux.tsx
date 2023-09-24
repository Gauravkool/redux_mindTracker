import { connect } from "react-redux";
import OrderDetailsPage, { OrderDetailsPageProps } from "./OrderDetailsPage";
import { State } from "./Store";
import { orderDetailLoadedAction } from "./actions/orders";
import { ordersMapSelector, ordersProductSelector } from "./selectors/orders";

function mapStateToProps(
  state: State,
  ownProps: Partial<OrderDetailsPageProps>
) {
  const orderId: number = ownProps.orderId!;
  return {
    order: ordersMapSelector(state)[orderId],
    products: ordersProductSelector(state)[orderId],
  };
}

const mapDispatchToProps = {
  orderDetailLoaded: orderDetailLoadedAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailsPage);
