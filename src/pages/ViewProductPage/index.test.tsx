import { RenderResult } from "@testing-library/react";
import React from "react";
import { Route } from "react-router-dom";

import { itHasHeading } from "../../testing/content";
import { product1 } from "../../testing/data/products";
import { itHasNavigationLinks } from "../../testing/links";
import { describeRender } from "../../testing/render";
import ViewProductPage from ".";

const describeViewProductPage = (
  url: string,
  fn: (getResult: () => RenderResult) => void
) => {
  beforeEach(async () => {
    window.history.pushState(undefined, "", url);
  });

  describeRender(
    "product list page",
    <Route component={ViewProductPage} exact path={`/products/:productId`} />,
    fn
  );
};

describe("when the product exists", () => {
  describeViewProductPage(`/products/${product1.id}`, getResult => {
    it("displays the name of the product", () => {
      getResult().getByText(product1.name);
    });

    itHasNavigationLinks(getResult);
  });
});

describe("when the product does not exist", () => {
  describeViewProductPage(
    `/products/c441f181-ceea-4d05-bacc-32d533069244`,
    getResult => {
      itHasHeading("Not Found", getResult);

      itHasNavigationLinks(getResult);
    }
  );
});
