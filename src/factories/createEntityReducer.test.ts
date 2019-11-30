import { Product } from "../models/product";
import { product1, product2 } from "../testing/data/products";
import createEntityModel, { EntityModel } from "./createEntityModel";

describe("entity model reducer", () => {
  let entity: EntityModel<Product>;

  beforeEach(() => {
    entity = createEntityModel<Product>("product");
  });

  it("adds created entities to state", () => {
    const previousState = {
      details: {
        [product1.id]: product1
      },
      list: [product1]
    };
    const nextState = entity.reducer(previousState, entity.created(product2));
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
    const nextState = entity.reducer(previousState, entity.deleted(product1));
    expect(nextState).toEqual({
      details: {
        [product2.id]: product2
      },
      list: [product2]
    });
  });
});
