import { order1 } from "../testing/data/orders";
import state from "../testing/data/state";
import {
  orderDetailsSelector,
  orderListSelector,
  ordersSelector
} from "./orders";

describe("orders selector", () => {
  it("selects orders from state", () => {
    expect(ordersSelector(state)).toBe(state.orders);
  });
});

describe("order details selector", () => {
  it("selects order details from state", () => {
    expect(orderDetailsSelector(state, order1.id)).toBe(
      state.orders.details[order1.id]
    );
  });
});

describe("order list selector", () => {
  it("selects order list from state", () => {
    expect(orderListSelector(state)).toBe(state.orders.list);
  });
});
