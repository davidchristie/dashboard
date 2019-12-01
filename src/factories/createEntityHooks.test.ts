import { act, renderHook } from "@testing-library/react-hooks";

import { product1 } from "../testing/data/products";
import model from "../testing/model";
import { AllProviders, store } from "../testing/providers";

describe("entity model hooks", () => {
  describe("useDelete", () => {
    it("should dispatch an entity deleted action", () => {
      const { result } = renderHook(() => model.useDelete(), {
        wrapper: AllProviders
      });
      store.dispatch = jest.fn();

      act(() => {
        result.current(product1);
      });

      expect(store.dispatch).toBeCalledWith(model.deleted(product1));
    });
  });
});
