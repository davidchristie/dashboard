import React from "react";

import model from "../testing/model";
import { describeRender } from "../testing/render";

const describeComponent = (
  name: string,
  element: React.ReactElement,
  testId: string
) => {
  describeRender(name, element, getResult => {
    it(`renders the ${testId} component`, () => {
      getResult().getByTestId(testId);
    });
  });
};

describe("entity model components", () => {
  describeComponent("create page", <model.CreatePage />, "Create");

  describeComponent("list page", <model.ListPage />, "List");
});
