import { fireEvent } from "@testing-library/dom";
import React from "react";

import { describeRender } from "../../testing/render";
import CreateProductForm from "./CreateProductForm";

const onSave = jest.fn();

afterEach(() => {
  jest.resetAllMocks();
});

describeRender(
  "create product form",
  <CreateProductForm onSave={onSave} />,
  getResult => {
    describe("when valid input values are entered", () => {
      const values = {
        name: "New Product"
      };

      beforeEach(() => {
        fireEvent.change(getResult().getByLabelText("Name"), {
          target: { value: values.name }
        });
      });

      describe("when save button is clicked", () => {
        beforeEach(() => {
          fireEvent.click(getResult().getByText("Save"));
        });

        it("saves the product", () => {
          expect(onSave).toBeCalledWith(values);
        });
      });
    });
  }
);
