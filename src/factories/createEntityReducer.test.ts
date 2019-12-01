import { product1, product2 } from "../testing/data/products";
import model from "../testing/model";

describe("entity model reducer", () => {
  it("adds created entities to state", () => {
    const previousState = {
      details: {
        [product1.id]: product1
      },
      list: [product1]
    };
    const nextState = model.reducer(previousState, model.created(product2));
    expect(nextState).toEqual({
      details: {
        [product1.id]: product1,
        [product2.id]: product2
      },
      list: [product1, product2]
    });
  });

  it("removes deleted entities from state", () => {
    const previousState = {
      details: {
        [product1.id]: product1,
        [product2.id]: product2
      },
      list: [product1, product2]
    };
    const nextState = model.reducer(previousState, model.deleted(product1));
    expect(nextState).toEqual({
      details: {
        [product2.id]: product2
      },
      list: [product2]
    });
  });
});
