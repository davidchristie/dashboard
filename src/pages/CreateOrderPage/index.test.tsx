import { fireEvent } from "@testing-library/react";
import React from "react";

import order from "../../entities/order";
import { itHasHeading } from "../../testing/content";
import { itHasNavigationLinks } from "../../testing/links";
import { store } from "../../testing/providers";
import { describeRender } from "../../testing/render";
import CreateProductPage from ".";

beforeEach(() => {
  store.dispatch = jest.fn();
});

describeRender("create order page", <CreateProductPage />, getResult => {
  itHasHeading("Create Order", getResult);

  itHasNavigationLinks(getResult);

  describe("when valid input values are entered", () => {
    const values = {
      name: "New Order"
    };

    beforeEach(() => {
      fireEvent.change(getResult().getByLabelText("Name"), {
        target: { value: "New Order" }
      });
    });

    describe("when save button is clicked", () => {
      beforeEach(() => {
        fireEvent.click(getResult().getByText("Save"));
      });

      it("dispatches a order created action", () => {
        expect(store.dispatch).toBeCalledWith(
          order.created({
            id: expect.any(String),
            name: values.name
          })
        );
      });
    });
  });
});
