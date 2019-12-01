import { act, renderHook } from "@testing-library/react-hooks";
import { push } from "connected-react-router";

import { product1 } from "../testing/data/products";
import model from "../testing/model";
import { AllProviders, store } from "../testing/providers";

describe("entity model hooks", () => {
  describe("useDelete", () => {
    beforeEach(() => {
      store.dispatch = jest.fn();

      const { result } = renderHook(() => model.useDelete(), {
        wrapper: AllProviders
      });

      act(() => {
        result.current(product1);
      });
    });

    it("should dispatch an entity deleted action", () => {
      expect(store.dispatch).toBeCalledWith(model.deleted(product1));
    });
  });

  describe("useCreate", () => {
    beforeEach(() => {
      store.dispatch = jest.fn();

      const { result } = renderHook(() => model.useCreate(), {
        wrapper: AllProviders
      });

      act(() => {
        result.current({ name: product1.name });
      });
    });

    it("should dispatch an entity created action", () => {
      expect(store.dispatch).toBeCalledWith(
        model.created({ id: expect.any(String), name: product1.name })
      );
    });

    it("should redirect to the entity list page", () => {
      expect(store.dispatch).toBeCalledWith(push("/products"));
    });
  });
});
