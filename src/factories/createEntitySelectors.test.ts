import { Product } from "../models/product";
import { product1 } from "../testing/data/products";
import state from "../testing/data/state";
import createEntityModel, { EntityModel } from "./createEntityModel";

describe("entity model selectors", () => {
  let entity: EntityModel<Product>;

  beforeEach(() => {
    entity = createEntityModel<Product>("product");
  });

  describe("details selector", () => {
    it("selects entity details from state", () => {
      expect(entity.detailsSelector(state, product1.id)).toBe(
        state.product.details[product1.id]
      );
    });

    describe("if entity details map is not defined in state", () => {
      it("returns undefined", () => {
        expect(entity.detailsSelector({}, product1.id)).toBeUndefined();
      });
    });
  });

  describe("list selector", () => {
    it("selects order list from state", () => {
      expect(entity.listSelector(state)).toBe(state.product.list);
    });

    describe("if entity list is not defined in state", () => {
      it("returns an empty list", () => {
        expect(entity.listSelector({})).toEqual([]);
      });
    });
  });
});
