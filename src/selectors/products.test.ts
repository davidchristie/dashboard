import { product1 } from "../testing/data/products";
import state from "../testing/data/state";
import {
  productDetailsSelector,
  productListSelector,
  productsSelector
} from "./products";

describe("products selector", () => {
  it("selects products from state", () => {
    expect(productsSelector(state)).toBe(state.products);
  });
});

describe("product details selector", () => {
  it("selects product details from state", () => {
    expect(productDetailsSelector(state, product1.id)).toBe(
      state.products.details[product1.id]
    );
  });
});

describe("product list selector", () => {
  it("selects product list from state", () => {
    expect(productListSelector(state)).toBe(state.products.list);
  });
});
