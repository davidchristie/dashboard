import product from "../../../entities/product";
import { product1, product2 } from "../../../testing/data/products";
import detailsReducer from ".";

describe("product list reducer", () => {
  it("adds created products to state", () => {
    const previousState = [product1];
    const action = product.created(product2);
    const nextState = detailsReducer(previousState, action);
    expect(nextState).toEqual([product1, product2]);
  });

  it("removes deleted products from state", () => {
    const previousState = [product1, product2];
    const action = product.deleted(product1);
    const nextState = detailsReducer(previousState, action);
    expect(nextState).toEqual([product2]);
  });
});
