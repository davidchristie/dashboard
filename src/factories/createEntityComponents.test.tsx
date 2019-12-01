import React from "react";

import model from "../testing/model";
import { describeRender } from "../testing/render";

describe("entity model components", () => {
  describeRender("create page", <model.CreatePage />, getResult => {
    it("renders the Create component", () => {
      getResult().getByTestId("Create");
    });
  });

  describeRender("list page", <model.ListPage />, getResult => {
    it("renders the List component", () => {
      getResult().getByTestId("List");
    });
  });
});
