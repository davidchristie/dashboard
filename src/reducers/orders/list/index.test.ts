import { orderCreated, orderDeleted } from "../../../actions/orders";
import { order1, order2 } from "../../../testing/data/orders";
import detailsReducer from ".";

describe("order list reducer", () => {
  it("adds created orders to state", () => {
    const previousState = [order1];
    const action = orderCreated(order2);
    const nextState = detailsReducer(previousState, action);
    expect(nextState).toEqual([order1, order2]);
  });

  it("removes deleted orders from state", () => {
    const previousState = [order1, order2];
    const action = orderDeleted(order1);
    const nextState = detailsReducer(previousState, action);
    expect(nextState).toEqual([order2]);
  });
});
