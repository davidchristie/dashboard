import { render, RenderResult } from "@testing-library/react";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { product1 } from "../../testing/data/products";
import state from "../../testing/data/state";
import ViewProductPage from ".";
import { itHasNavigationLinks } from "../../testing/links";

const push = (url: string) => {
  window.history.pushState(undefined, "", url);
};

const renderViewProductPage = () => {
  const store = createStore(() => state);
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <Route
          component={ViewProductPage}
          exact
          path={`/products/:productId`}
        />
      </BrowserRouter>
    </Provider>
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
