import { product1 } from "../testing/data/products";
import state from "../testing/data/state";
import model from "../testing/model";

describe("entity model selectors", () => {
  describe("details selector", () => {
    it("selects entity details from state", () => {
      expect(model.detailsSelector(state, product1.id)).toBe(
        state.products.details[product1.id]
      );
    });

    describe("if entity details map is not defined in state", () => {
      it("returns undefined", () => {
        expect(model.detailsSelector({}, product1.id)).toBeUndefined();
      });
    });
  });

  describe("list selector", () => {
    it("selects order list from state", () => {
      expect(model.listSelector(state)).toBe(state.products.list);
    });

    describe("if entity list is not defined in state", () => {
      it("returns an empty list", () => {
        expect(model.listSelector({})).toEqual([]);
      });
    });
  });
});
