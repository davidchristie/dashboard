import { render, RenderResult } from "@testing-library/react";
import React from "react";
import { Route } from "react-router-dom";
import { product1 } from "../../testing/data/products";
import ViewProductPage from ".";
import { itHasNavigationLinks } from "../../testing/links";
import { AllProviders } from "../../testing/providers";

const push = (url: string) => {
  window.history.pushState(undefined, "", url);
};

const renderViewProductPage = () => {
  return render(
    <Route component={ViewProductPage} exact path={`/products/:productId`} />,
    {
      wrapper: AllProviders
    }
  );
};

describe("product list page", () => {
  let result: RenderResult;

  describe("when the product exists", () => {
    beforeEach(() => {
      push(`/products/${product1.id}`);
      result = renderViewProductPage();
    });

    it("displays the name of the product", async () => {
      result.getByText(product1.name);
    });

    itHasNavigationLinks(() => result);
  });

  describe("when the product does not exist", () => {
    beforeEach(() => {
      push("/products/c441f181-ceea-4d05-bacc-32d533069244");
      result = renderViewProductPage();
    });

    it("displays the not found page", async () => {
      result.getByText("Not Found");
    });

    itHasNavigationLinks(() => result);
  });
});
