import order from "../../../entities/order";
import { order1, order2 } from "../../../testing/data/orders";
import detailsReducer from ".";

describe("order details reducer", () => {
  it("adds created orders to state", () => {
    const previousState = {
      [order1.id]: order1
    };
    const action = order.created(order2);
    const nextState = detailsReducer(previousState, action);
    expect(nextState).toEqual({
      [order1.id]: order1,
      [order2.id]: order2
    });
  });

  it("removes deleted orders from state", () => {
    const previousState = {
      [order1.id]: order1,
      [order2.id]: order2
    };
    const action = order.deleted(order1);
    const nextState = detailsReducer(previousState, action);
    expect(nextState).toEqual({
      [order2.id]: order2
    });
  });
});
